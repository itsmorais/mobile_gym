// src/Components/Login.js
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrGoogle } from 'react-icons/gr'
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';


export default function SignIn(){
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/")
    }
  }, [session])


  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 shadow-[0_4px_9px_-4px_#3b71ca]" >
      <div className="md:w-1/3 max-w-sm">
        <Image src={"/login.png"} alt="loginImage" width={1000} height={1000} ></Image>
      </div>
      <div className="md:w-1/3 max-w-sm p-5">
    
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4 cursor:pointer"
            onClick={() => Router.push("/signUp")}
          >
            Register
          </a>
        </div>
 
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
          
        </div>
        <div className="text-center md:text-center flex justify-center items-center">
        <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full   text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            onClick={() => signIn()}
          >
            <FcGoogle
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          
        </div>
      </div>
    </section>
  );
};

