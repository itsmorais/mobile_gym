import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/header'
import { Container } from '@/components/header/style'
import { Nav } from '@/components/header/style/'
import Title from '../components/title/'
import TreinoComponent from '../components/treino'
import prisma from '@/libs/prisma'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function Home({ treinos, proximoTreino }) {
  const [indexTreino, setindexTreino] = useState(proximoTreino.id_treino - 1)


  function handleIndexTreino() {
    if (indexTreino < (treinos.length) - 1) {
      setindexTreino(indexTreino + 1)

    }
    else {
      alert("Não há mais treinos!")
    }
  }

  function handleBack() {
    if (indexTreino > 0) {
      setindexTreino(indexTreino - 1)

    }
    else {
      alert("Não há mais treinos")
    }
  }
  return (
    <>
      <Head>
        <title>Gym App</title>
        <meta name="description" content="Developed by Michael Morais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Container>
            <Nav onClick={handleBack}>

              <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1L1.5 13.5L14 26" stroke="white" />
              </svg>

              <p>Voltar</p></Nav>

            <Nav onClick={handleIndexTreino}>

              <p>Próximo</p>
              <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 26L13.5 13.5L1 1" stroke="white" />
              </svg>
            </Nav>

          </Container >

          <Header></Header>



          <Title treinoNome={treinos[indexTreino].nome_treino}></Title>

          {treinos[indexTreino].exercicio.map((exercicio_elem) => (
            <TreinoComponent key={exercicio_elem.id_exercicio} exercicio={exercicio_elem} quantidadeExercicios={treinos[indexTreino].exercicio.length}></TreinoComponent>
          ))}

          <footer style={{ marginBottom: "50px" }}></footer>

        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  let treinos = await prisma.treino.findMany({
    include: {
      exercicio: {
        include: {
          set: true
        },
        orderBy: {
          index_exercicio: 'asc'
        }
      }

    },
  });

  let proximoTreino = await prisma.treino.findFirst({
    where: {
      status_treino: false
    },

  })

  return {
    props: { treinos, proximoTreino },
  }
}