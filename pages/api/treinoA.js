import { prisma } from "@/libs/prisma";

export default async function handler(req, res) {
  const treino = await prisma.treino.findUnique({
    where: { id_treino: 1 },
  });

  const newExercicios = await prisma.exercicio.createMany({
    data: [
      {
        nome_exercicio: "Voador",
        status_exercicio: false,
        tipo_exercicio: "Drop",
        carga: 40,
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          createMany: {
            data: [
              { set_valor: 15 },
              { set_valor: 12 },
              { set_valor: 10 },
              { set_valor: 6 },
            ],
          },
        },
      },
      {
        nome_exercicio: "Pull over",
        status_exercicio: false,
        tipo_exercicio: "Mesma carga",
        carga: 20,
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          createMany: {
            data: [
              { set_valor: 15 },
              { set_valor: 15 },
              { set_valor: 15 },
            ],
          },
        },
      },
    ],
    include: { sets: true },
  });

  console.log(newExercicios);
  res.status(200).json("Done");
}
