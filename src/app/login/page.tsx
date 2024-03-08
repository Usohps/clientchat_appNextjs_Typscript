"use client"
import { FC, useState } from "react";
import Button from "../../components/ui/Button";
import {FcGoogle} from "react-icons/fc"
import {signIn} from "next-auth/react"
import {toast} from "react-hot-toast"
interface Loginprops {}
const page: FC<Loginprops> = ({}) => {
    const [isloading,setIsloading]= useState<boolean>(false)
    async function loginWithGoogle(){
      setIsloading(true)
      try {
        // signin is a predefined function by next-auth 
        await signIn("google")
      } catch (error) {
        toast.error("Wrong Login Details")
        //display error message to users
        
      }
      finally{
        setIsloading(false)
      }
    }
  return (
    <>
      <div className="flex min-h-full justify-center items-center py-12 px-4 sm:px-6 md:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
              COZYDEV~
            </h1>
            <h2 className="mt-6 text-center text-3xl font-bold trackking-tight text-gray-900">SIgn in your account</h2>
          </div>
          <Button isLoading={isloading} onClick={loginWithGoogle} type="button" className="w-full" >
            {isloading ? null : (<div><FcGoogle/></div>)}
            Login Here
            </Button>
        </div>
      </div>
    </>
  );
};
export default page;
