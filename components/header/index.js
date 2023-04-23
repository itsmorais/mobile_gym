import { Container, Nav, Title } from "./style"

export default function Header() {

  return (
    <>
      <Container>
        <Nav href={'/'}>

          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1L1.5 13.5L14 26" stroke="white" />
          </svg>

          <p>Voltar</p></Nav>

        <Nav href={'/'}>

          <p>Treino B</p>
          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 26L13.5 13.5L1 1" stroke="white" />
          </svg>
        </Nav>

      </Container >
      <Title>
        <span>Michael </span>
        Treino
      </Title>

    </>
  )
}

module.exports = Header