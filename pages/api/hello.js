import prisma from "@/libs/prisma"
export default async function handler(req, res) {
 const treinos = await prisma.treino.create({
  data:{
    nome_treino: "Pernas",
    status_treino:false,
  }
 })
 
  res.status(200).json({treinos})
}
