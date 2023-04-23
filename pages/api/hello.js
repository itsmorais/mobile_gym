// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/libs/prisma"

export default async function handler(req, res) {
 const treinos = await prisma.treino.findMany()
 console.log(treinos)
  res.status(200).json({ name: 'John Doe' })
}
