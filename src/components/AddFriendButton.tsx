"use client";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { addFriendsValidator } from "../library/validations/add-friends";
import axios from "axios";
import { z } from "zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface AddFriendbuttonProps {}
const AddFriendButton: FC<AddFriendbuttonProps> = ({}) => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  type FormData = z.infer<typeof addFriendsValidator>;
  const {register,handleSubmit,setError, formState:{errors}} = useForm<FormData>({ resolver: zodResolver(addFriendsValidator) });
  
  const addFriend = async (email: string) => {
    try {
      const validatedEmail = addFriendsValidator.parse({ email });
      await axios.post("/api/friends/add", {
        email: validatedEmail,
      });
      setShowSuccess(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email",{message: error.message})
        return;
      }
      if (error instanceof AxiosError) {
        setError("email",{message:error.response?.data})
        return;
      }
      setError("email",{message:"Something went wrong"})
    }
  };
  const onSubmit = (data: FormData)=>{
    addFriend(data.email)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6  text-gray-900"
      >
        Add Friend By Email
      </label>
      <div className="mt-2 flex gap-4">
        <input
          type="text"
          className="block w-full md:w-[500px] rounded-md border-0 outline-none px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
          {...register("email")}
        />
        <Button className="w-[100px]">Add</Button>  
      </div>
      <p className="mt-2 text-sm text-red-600 ">{errors.email?.message}</p>
        {showSuccess?<p className="mt-2 text-sm text-green-600 ">Friend Request Sent</p>: null }
    </form>
  );
};
export default AddFriendButton;
