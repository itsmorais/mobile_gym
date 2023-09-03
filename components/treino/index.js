import { TreinoNome, TreinoContainer, ImageCardContainer } from "./style";
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from 'react-icons/ri'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { useState } from "react";

export default function TreinoComponent({ exercicio, quantidadeExercicios }) {
  const [carga, setCarga] = useState(exercicio.carga);
  const [status, setStatus] = useState(exercicio.status_exercicio);

  const handleIncreaseCarga = async function () {
    if (carga < 100) {
      setCarga(carga + 1);
      await fetch(`/api/carga?exercicioId=${exercicio.id_exercicio}&carga=${carga + 1}`)
    }
  }

  const handleDecreaseCarga = async function () {
    if (carga > 0) {
      setCarga(carga - 1);
      await fetch(`/api/carga?exercicioId=${exercicio.id_exercicio}&carga=${carga - 1}`)

    }
  }

  const handleDone = async function () {
    setStatus(true);
    await fetch(`/api/feito?exercicioId=${exercicio.id_exercicio}&status=true`)
    await fetch(`api/treinoFeito?treinoId=${exercicio.id_treino}&quantidadeExercicios=${quantidadeExercicios}`)
  }

  const handleUndone = async function () {
    setStatus(false);
    await fetch(`/api/feito?exercicioId=${exercicio.id_exercicio}&status=false`)

  }




  return (
    <>


      <div key={exercicio.id_exercicio}>
        <TreinoNome>
          <h3>{exercicio.nome_exercicio}</h3>
          {status
            ? <ImCheckboxChecked size={20} onClick={handleUndone} />
            : <ImCheckboxUnchecked size={20} onClick={handleDone} />}
        </TreinoNome>

        <TreinoContainer>
          <ImageCardContainer style={{ backgroundImage: `url(${exercicio.image_src})` }}></ImageCardContainer>

          <p>Sets:
            {exercicio.sets.map(({ set_valor }) => ' ' + set_valor + ' ')}
          </p>
          <p >Tipo: {exercicio.tipo_exercicio}</p>

          {carga > 0 &&
            <div id="carga" key={exercicio.id_exercicio}>
              Carga:
              <RiArrowUpCircleFill onClick={handleIncreaseCarga} />
              <p key={exercicio.id_exercicio}>{carga} Kg</p>
              <RiArrowDownCircleFill onClick={handleDecreaseCarga} />
            </div>
          }
        </TreinoContainer>
      </div>

    </>
  )
}

module.exports = TreinoComponent;
