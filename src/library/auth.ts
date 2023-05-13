import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google"

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientsecret = process.env.GOOGLE_CLIENT_SECRET

    if(!clientId || clientId.length === 0){
        throw new Error("Missing ClientID") 
    }
    if(!clientsecret || clientsecret.length === 0){
        throw new Error("Missing Clientsecret")
    }
    return({
        clientId,clientsecret
    })
}
export const authoptions: NextAuthOptions = {

    adapter: UpstashRedisAdapter(db),
    session: {
        strategy: "jwt"
    },
    pages:{
        signIn:"/login"
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientsecret
        })
    ],
    callbacks:{
        async jwt ({token,user}){
            const dbUser = (await db.get(`user:${token.id}`)) as User || null
            if(!dbUser){
                token.id = user!.id
                return token
            }
            return{
                id: dbUser.id,
                email: dbUser.email,
                name: dbUser.name,
                photo: dbUser.image
            }
        },
        async session ({session,token}){
            if(token){
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.name = token.name
                session.user.image = token.picture
            }
            return session
        },
        redirect(){
            return("/dashboard")
        }
    }
}