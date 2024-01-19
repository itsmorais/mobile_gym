import { Container, Nav, Title } from "./style"
import { useRouter } from "next/router"
export default function Header({ userName }) {

  return (
    <>

      <Title>
        <span>{userName} </span>
        Treino
      </Title>

    </>
  )
}

module.exports = Header