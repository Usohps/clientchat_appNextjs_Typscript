import { FC, useState } from "react";
import Button from "../../components/ui/Button";
interface Loginprops {}
const page: FC<Loginprops> = ({}) => {
    const [isloading,setIsloading]= useState(false)
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
          <Button isLoading={isloading} type="button" className="" >Login Here</Button>
        </div>
      </div>
    </>
  );
};
export default page;
