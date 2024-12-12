// src/Components/Login.js
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';
export default function SignIn(){
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/")
    }
  }, [session])


  const handleSubmit = async () => {
    // Show loading toast
    const loadingToastId = toast.loading("Logging in...");
  
    try {
      const res = await signIn("credentials", {
        email,
        password: pass,
        redirect: false,
      });
  
      if (res?.error) {
        console.log(res)
        // Update toast with error message
        toast.update(loadingToastId, {
          render: "Email ou senha incorretos",
          type: "error",
          isLoading: false,
          autoClose: 3000,
          
        });
        return;
      }
  
      if (res?.ok) {
        // Update toast with success message
        toast.update(loadingToastId, {
          render: "Login successful!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        // Redirect after a short delay to show the toast
        setTimeout(() => Router.push("/"), 1500);
      }
    } catch (err) {
      // Handle unexpected errors
      toast.update(loadingToastId, {
        render: "Um erro inesperado aconteceu.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };
  



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
          onChange={(e) => setEmail(e.target.value)}

        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}

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
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-blue-600 hover:underline cursor-pointer hover:underline-offset-4 cursor:pointer"
            onClick={() => Router.push("/signUp")}
          >
            Register
          </a>
        </div>
 
        </div>
    </section>
  );
};

