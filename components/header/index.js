import { signOut, useSession } from 'next-auth/react';
import { Logout } from "./style";
import ThemeToggle from '../toggle/index'
import Image from "next/image";
export default function Header({ userName }) {

  return (

    <Logout>
      <div className="flex items-center gap-2.5">
        <Image src={"/cpfit.png"} width={42} height={42} />

        <p id="userName">
          <span>Bem vindo(a), </span>{userName}
        </p>
      </div>
      <button id="logout" onClick={() => signOut()}>Sair</button>
          <ThemeToggle />
    </Logout>




  )
}

