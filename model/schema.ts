import mongoose, { Schema } from "mongoose";
import { exercicio_image_name } from "../utils/enum";


export interface Treino {
  _id:string
  idTreino:number
  nome_treino: string,
  status_treino: boolean,
  Exercicios: Exercicio[]
}

export interface Exercicio {
  nome_exercicio: string,
  status_exercicio: boolean,
  tipo_exercicio: string,
  carga: number,
  image_src: exercicio_image_name,
  set?: number[];
}

export const ExercicioSchema = new Schema<Exercicio>({
  nome_exercicio: { type: String, required: true },
  status_exercicio: { type: Boolean },
  tipo_exercicio: { type: String, required: true },
  carga: { type: Number ,required:true},
  image_src: { type: String, required: true },
  set: { type: [Number] }



})

export const TreinoSchema = new Schema<Treino>({
  nome_treino: { type: String, required: true },
  idTreino:{type:Number, required:true},
  status_treino: { type: Boolean },
  Exercicios: { type: [ExercicioSchema] }
})

export default mongoose.models.Treino || mongoose.model('Treino', TreinoSchema);
