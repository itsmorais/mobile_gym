import mongoose, { Schema, Document, Types } from "mongoose";

const ExerciseSchema = new Schema({
  nome_exercicio: { type: String, required: true },
  status_exercicio: { type: Boolean, default: true },
  tipo_exercicio: { type: String, required: true },
  carga: { type: Number, default: 0 },
  image_src: { type: String },
  set: [{ type: Number }],
});

const TreinoSchema = new Schema({
  nome_treino: { type: String, required: true },
  status_treino: { type: Boolean, default: true },
  Exercicios: [ExerciseSchema], 
  user: { type: Types.ObjectId, ref: "User", required: true }, 
});

const Treino = mongoose.models.Treino || mongoose.model("Treino", TreinoSchema);

export default Treino;
