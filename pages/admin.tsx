
import Head from 'next/head'
import { FiUser } from "react-icons/fi"; // For "Alunos" section
import { GiWeightLiftingUp } from "react-icons/gi"; // For "Treinos" section
import Image from "next/image";
import Router from 'next/router';

import { getSession } from "next-auth/react";
import DesktopHeader from '../components/headerDesktop';
export default function Home() {


    return (
        <>
           <DesktopHeader index={0}/>

            {/* Content */}
            <main className="flex align-center px-20 pt-10 w-fit ">
                <div className="w-100">
                    <h2 className="text-2xl font-semibold text-gray-500 mb-8">
                        BOAS-VINDAS DA <span className="text-orange-500">COMPASSFIT</span> 👋
                    </h2>
                    <h1 className="text-6xl font-bold leading-tight">
                        Cadastre novos alunos ou <br /> gerencie seus treinos
                    </h1>

                    {/* Cards */}
                    <div className="flex gap-5 mt-12" onClick={() => Router.push("/students")}>
                        <div className="p-5 cursor-pointer mb-10 shadow-lg bg-yellow-200 rounded-lg w-1/2 hover:shadow-lg hover:shadow-yellow-400 transition">
                            <div className="flex items-center gap-5 bg-yellow-200 ">
                                <FiUser className="text-2xl bg-yellow-200 " />
                                <h3 className="text-2xl font-bold bg-yellow-200 ">Alunos</h3>
                            </div>
                            <p className="text-black mt-2 text-xl bg-yellow-200 ">
                                Cadastre novos alunos, gerencie o treino da galera.
                            </p>
                        </div>
                        <div className="p-5 cursor-pointer mb-10 shadow-lg bg-yellow-200 rounded-lg w-1/2 hover:shadow-lg hover:shadow-yellow-400 transition mr-10">
                            <div className="flex items-center gap-5 bg-yellow-200 ">
                                <GiWeightLiftingUp className="text-2xl  bg-yellow-200" />
                                <h3 className="text-2xl font-bold  bg-yellow-200">Treinos</h3>
                            </div>
                            <p className="text-black mt-2 text-xl  bg-yellow-200">
                                Conheça nossa base de exercícios, crie novas variações.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Promotional Image */}


                <Image
                    src="/cover.jpeg"
                    alt="Promotional Image"
                    width={500}
                    height={400}
                    className="rounded-lg"
                />

            </main>


        </>
    )
}

