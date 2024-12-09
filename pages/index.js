import connectDB from './api/lib/connect'
import TreinoModel from '../model/schema'
import Head from 'next/head'
import { useEffect, useState } from "react"
import Header from '../components/header'
import { Container } from '../components/header/style'
import { Nav } from '../components/header/style'
import Title from '../components/title/'
import TreinoComponent from '../components/treino'
import { signIn, signOut, useSession } from 'next-auth/react';
import Router from 'next/router'

import { getSession } from "next-auth/react";
export default function Home({ treinos, proximoTreino }) {
  const [indexTreino, setIndexTreino] = useState(proximoTreino - 1);
  const [user, setUser] = useState("User");

  const { data: session } = useSession();

  function handleIndexTreino() {
    if (indexTreino < treinos.length - 1) {
      setIndexTreino(indexTreino + 1);
    } else {
      alert("Não há mais treinos!");
    }
  }

  function handleBack() {
    if (indexTreino > 0) {
      setIndexTreino(indexTreino - 1);
    } else {
      alert("Não há mais treinos");
    }
  }

  useEffect(() => {
    if (!session) {
      Router.push("/signIn")
    }
    else {
      setUser(session.user.name);
    }
  }, [session])

  return (
    <>
      <Head>
        <title>Gym App</title>
        <meta name="description" content="Developed by Michael Morais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="fixed top-0 left-0 w-full text-white z-[1000]">
        <Header userName={user}></Header>
        <Container>
          <Nav onClick={handleBack}>
            <svg width="15" height="27" viewBox="0 0 15 27" fill="none">
              <path d="M14 1L1.5 13.5L14 26" stroke="white" />
            </svg>
          </Nav>
        <Title treinoNome={treinos[indexTreino].nome_treino}></Title>
          <Nav onClick={handleIndexTreino}>
            <svg width="15" height="27" viewBox="0 0 15 27" fill="none">
              <path d="M1 26L13.5 13.5L1 1" stroke="white" />
            </svg>
          </Nav>
        </Container >
      </div>

      <div style={{"paddingTop":130}}>
        {treinos[indexTreino].Exercicios.map((exercicio_elem) => (
          <TreinoComponent key={exercicio_elem._id} exercicio={exercicio_elem} quantidadeExercicios={treinos[indexTreino].Exercicios.length} idTreino={treinos[indexTreino]._id}></TreinoComponent>
        ))}
      </div>
        <footer style={{ marginBottom: "50px" }}></footer>

    </>
  )
}

export async function getServerSideProps(context) {
  try {
    // Connect to the database
    await connectDB();

    // Get the current user's session
    const session = await getSession(context);

    if (!session) {
      // Redirect to the sign-in page if no session is found
      return {
        redirect: {
          destination: "/signIn",
          permanent: false,
        },
      };
    }

    // Fetch treinos for the logged-in user
    const treinos = await TreinoModel.find({ user: session.user.id }).lean();
    const indexTreino = await TreinoModel.findOne({
      user: session.user.id,
      status_treino: false,
    }).lean();

    if (!treinos || !indexTreino) {
      throw new Error("No treinos found for the current user.");
    }

    // Convert _id fields to strings for serialization
    const formattedTreinos = treinos.map((treino) => ({
      ...treino,
      _id: treino._id.toString(),
      Exercicios: treino.Exercicios.map((exercicio) => ({
        ...exercicio,
        _id: exercicio._id.toString(),
      })),
    }));

    return {
      props: {
        treinos: formattedTreinos,
        proximoTreino: indexTreino.idTreino,
      },
    };
  } catch (error) {
    console.error("Error fetching user-specific treinos:", error);

    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
}