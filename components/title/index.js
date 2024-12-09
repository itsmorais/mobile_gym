import { Titulo } from './style'

export default function Title({treinoNome}) {
  return (
    <>
      <Titulo>
        Treino:
        <span>{treinoNome}</span>
      </Titulo>
    </>
  )
}

