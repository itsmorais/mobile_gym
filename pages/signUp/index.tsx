// src/Components/Login.js
import React, { useState } from "react";
import Image from "next/image";
import Router from 'next/router';


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("User")


  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: pass,
          name,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration failed!");
      } else {
        alert("Usuário cadastrado com sucesso!");
        Router.push("/signIn");
      }
    } catch (error) {
      alert("An error occurred during registration");
      console.log(error,"ERRO DURANTE REGISTRO")
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
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
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
            className="mt-4 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Já tem uma conta?{" "}
          <a
            className="text-blue-600 cursor-pointer hover:underline hover:underline-offset-4 cursor:pointer"
            onClick={() => Router.push("/signIn")}
          >
            Login
          </a>
        </div>



      </div>
    </section>
  );
};

