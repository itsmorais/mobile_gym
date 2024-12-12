"use client"
import { TreinoNome, TreinoContainer, ImageCardContainer } from "./style";
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from 'react-icons/ri'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { exercicio_image_name } from "../../utils/enum";
import { useState } from "react";

export default function TreinoComponent({ exercicio, quantidadeExercicios,idTreino }) {
  const [carga, setCarga] = useState(exercicio.carga);
  const [status, setStatus] = useState(exercicio.status_exercicio);

  const handleIncreaseCarga = async function () {
    if (carga < 100) {
      setCarga(carga + 1);
      await fetch(`/api/carga?exercicioId=${exercicio._id}&carga=${carga + 1}`)
    }
  }

  const handleDecreaseCarga = async function () {
    if (carga > 0) {
      setCarga(carga - 1);
      await fetch(`/api/carga?exercicioId=${exercicio._id}&carga=${carga - 1}`)

    }
  }

  const handleDone = async function () {
    setStatus(true);
    await fetch(`/api/feito?exercicioId=${exercicio._id}&status=true`)
    await fetch(`/api/treinoFeito?treinoId=${idTreino}&quantidadeExercicios=${quantidadeExercicios}`)
  }

  const handleUndone = async function () {
    setStatus(false);
    await fetch(`/api/feito?exercicioId=${exercicio._id}&status=false`)

  }




  return (
    <>


      <div key={exercicio._id}>

        <TreinoContainer>
          <ImageCardContainer style={{ backgroundImage: `url(${exercicio_image_name[exercicio.image_src]})` }}></ImageCardContainer>
        <TreinoNome>
          <h3>{exercicio.nome_exercicio}</h3>
          {status
            ? <ImCheckboxChecked size={20} onClick={handleUndone} />
            : <ImCheckboxUnchecked size={20} onClick={handleDone} />}
        </TreinoNome>

          <p>Sets:
            <span>{exercicio.set.map((valor) => ' ' + valor + ' ')}</span>
          </p>
          <p >Tipo: <span>{exercicio.tipo_exercicio}</span></p>

          {carga > 0 &&
            <div id="carga" key={exercicio.carga}>
              Carga:
              <RiArrowUpCircleFill onClick={handleIncreaseCarga} />
              <p key={exercicio.carga}><span>{carga} Kg</span></p>
              <RiArrowDownCircleFill onClick={handleDecreaseCarga} />
            </div>
          }
        </TreinoContainer>
      </div>

    </>
  )
}

