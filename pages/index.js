import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/header'
import Title from '../components/title'
import TreinoComponent from '../components/treino'
import prisma from '@/libs/prisma'
const inter = Inter({ subsets: ['latin'] })

export default function Home({treinos}) {

  return (
    <>
      <Head>
        <title>Gym App</title>
        <meta name="description" content="Developed by Michael Morais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>


          <Header></Header>
          <Title treinoNome={treinos[1].nome_treino}></Title>

          {treinos[1].exercicios.map((exercicio)=>(
            <TreinoComponent key={exercicio.id_exercicio} exercicio={exercicio}></TreinoComponent>
          ))}

          <footer style={{ marginBottom: "50px" }}></footer>

        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const treinos = await prisma.treino.findMany({
    include:{
      exercicios:{
        include:{
          sets:true
        }
      }
    },
  })

 

  return {
    props: { treinos },
  } 
}