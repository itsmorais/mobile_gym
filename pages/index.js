import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/header'
import Title from '../components/title'
import TreinoComponent from '../components/treino'
import { prisma } from '@/libs/prisma'
const inter = Inter({ subsets: ['latin'] })

export  default function Home(props) {
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
          <Title></Title>

          {props.propsTreino.map((treino)=>(
            <TreinoComponent key={treino.idTreino} treino={treino}/>

          ))}

        </div>
      </main>
    </>
  )
}

export  async function getStaticProps(){
  const propsTreino = await prisma.treino.findMany()

  return{
    props:{propsTreino},
  }
}