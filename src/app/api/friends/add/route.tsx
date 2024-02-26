import { getServerSession } from "next-auth"
import { addFriendsValidator } from "../../../../library/validations/add-friends"
import { authoptions } from "../../../../library/auth"
import { Redis } from "@upstash/redis"
export async function POST(req:Request) {
    try {
        const body = await req.json()
        const {email:emailToAdd} = addFriendsValidator.parse(body.email)
        const RESTResponse = await fetch(`${Redis.fromEnv()}/get/user:email${emailToAdd}`,{
            headers:{
            Authorization:`Bearer:${Redis.fromEnv()}`
            },
            cache:"no-store",
        })
        const data = await RESTResponse.json() as {result:string | null}
        const idToAdd = data.result
        const session = await getServerSession(authoptions)
        if (!idToAdd){
            return new Response("This person does not exist.",{status:400})
        }
        if(!session){
            return new Response("UnAuthorized",{status:401})
        }
        console.log(data)
        console.log("bad")
    } catch (error) {
        
    }
} 