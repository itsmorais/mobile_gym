import { TreinoNome, TreinoContainer, ImageCardContainer } from "./style";
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from 'react-icons/ri'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { useState } from "react";



export default function TreinoComponent({treino}) {


  const [carga=treino.carga, setCarga] = useState(40);
  const [status, setStatus] = useState(treino.statusTreino)

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
        <h3>{treino.nomeTreino}</h3>
        {treino.statusTreino ? <ImCheckboxChecked size={20} onClick={handleUndone} />
          : <ImCheckboxUnchecked size={20} onClick={handleDone} />}



      </TreinoNome>

      <TreinoContainer>
        <ImageCardContainer></ImageCardContainer>

        <p>Sets: {treino.set1} {treino.set2} {treino.set3} {treino.set4}</p>
        <p>Tipo: {treino.tipoTreino}</p>


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

module.exports = TreinoComponent