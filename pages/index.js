import connectDB from './api/lib/connect'
import TreinoModel from '../model/schema'
import Head from 'next/head'
import { useState } from "react"
import Header from '../components/header'
import { Container } from '../components/header/style'
import { Nav } from '../components/header/style'
import Title from '../components/title/'
import TreinoComponent from '../components/treino'

export default function Home({ treinos,proximoTreino}) {
  const [indexTreino, setIndexTreino] = useState(proximoTreino-1);



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

  return (
    <>
      <Head>
        <title>Gym App</title>
        <meta name="description" content="Developed by Michael Morais" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
        <Nav onClick={handleBack}>
          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1L1.5 13.5L14 26" stroke="white" />
          </svg>
          <p>Voltar</p>
        </Nav>
        <Nav onClick={handleIndexTreino}>
          <p>Próximo</p>
          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 26L13.5 13.5L1 1" stroke="white" />
          </svg>
        </Nav>
      </Container >

      <Header userName="Michael"></Header>
      <Title treinoNome={treinos[indexTreino].nome_treino}></Title>
      {treinos[indexTreino].Exercicios.map((exercicio_elem) => (
        <TreinoComponent key={exercicio_elem._id} exercicio={exercicio_elem} quantidadeExercicios={treinos[indexTreino].Exercicios.length} idTreino={treinos[indexTreino]._id}></TreinoComponent>
      ))}
      <footer style={{ marginBottom: "50px" }}></footer>
    </>
  )
}

export async function getServerSideProps() {
  await connectDB();

  let treinos = await TreinoModel.find({}).lean();
  let indexTreino = await TreinoModel.findOne({status_treino:false}).lean();
  const proximoTreino = indexTreino.idTreino;

  treinos = treinos.map(treino => {
    treino._id = treino._id.toString();
    treino.Exercicios = treino.Exercicios.map(exercicio => {
      exercicio._id = exercicio._id.toString();
      return exercicio;
    });
    return treino;
  });


  return {
    props: { treinos,proximoTreino},
  };
}
