import { TreinoNome, TreinoContainer, ImageCardContainer } from "./style";
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from 'react-icons/ri'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { useState } from "react";



export default function Treino() {

  const [carga, setCarga] = useState(40);
  const [status, setStatus] = useState(false)

  const handleIncreaseCarga = function () {
    setCarga(carga + 1)
  }

  const handleDecreaseCarga = function () {
    setCarga(carga - 1)
  }

  const handleDone = function () {
    setStatus(true)
  }

  const handleUndone = function () {
    setStatus(false)
  }


  return (
    <>
      <TreinoNome>
        <h3>Supino Plano</h3>
        {status ? <ImCheckboxChecked size={20} onClick={handleUndone} />
          : <ImCheckboxUnchecked size={20} onClick={handleDone} />}



      </TreinoNome>

      <TreinoContainer>
        <ImageCardContainer></ImageCardContainer>

        <p>Sets: 12-10-8-6</p>
        <p>Tipo: Progressão de carga</p>


        <div id="carga">
          Carga:
          <RiArrowUpCircleFill onClick={handleIncreaseCarga} />
          <p>{carga} Kg</p>
          <RiArrowDownCircleFill onClick={handleDecreaseCarga} />
        </div>
      </TreinoContainer>
    </>
  )
}

module.exports = Treino