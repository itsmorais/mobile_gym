import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from 'next/router';
import { useState } from "react";


export default function DesktopHeader({index}) {
    const [selectedMenu, setSelectedMenu] = useState(index)
    return (
        <>
            <Head>
                <title>Gym App</title>
                <meta name="description" content="Developed by Michael Morais" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Header */}
            <header className="flex justify-between items-center pt-5 px-20 mb-6">
                <div className="flex items-center gap-10">
                    <Image src="/cpfit.png" alt="Logo" width={50} height={50} />
                    <h1 className="text-2xl font-bold">
                        Bem vindo <span className="text-2xl text-orange-500">Professor</span>
                    </h1>
                </div>
                <nav className="flex gap-20 items-center">
                    <Link href={"/admin"} className={`hover:font-semibold border-b-2 hover:border-yellow-400 hover:pb-1 text-xl ${selectedMenu===0 && "border-yellow-400 pb-1 text-xl font-bold"}`}>
                        Início
                    </Link>
                    <Link href={"/students"}
                    className={`hover:font-semibold border-b-2 hover:border-yellow-400 hover:pb-1 text-xl ${selectedMenu===1 && "border-yellow-400 pb-1 text-xl font-bold"}`}>
                        Alunos
                    </Link>
                    <Link href="#" className={`hover:font-semibold border-b-2 hover:border-yellow-400 hover:pb-1 text-xl ${selectedMenu===2 && "border-yellow-400 pb-1 text-xl font-bold"}`}>
                        Treinos
                    </Link>
                </nav>
                <button className="px-4 py-2 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white">
                    SAIR
                </button>
            </header>
            <div className="w-full border-t border-gray-300"></div>


        </>
    );
}
