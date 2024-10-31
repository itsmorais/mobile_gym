import { Container, Nav, Title } from "./style"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from 'next-auth/react';
import { Logout } from "./style";
export default function Header({ userName }) {
  const { data: session } = useSession();

  return (

    <>
      <Logout>
        <p id="userName">
          <span>Olá, </span>{userName}
        </p>
        <button id="logout" onClick={() => signOut()}>Logout</button>
      </Logout>

    </>



  )
}

module.exports = Header