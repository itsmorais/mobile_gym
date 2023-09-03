import prisma from "@/libs/prisma";
import { exercicio_image_name } from "@/utils/enum";
export default async function handler(req, res) {
  const CriarTreino = await prisma.treino.create({
    data: {
      nome_treino: "Peito e Tríceps",
      status_treino: false,
    }
  })

  const treino = await prisma.treino.findUnique({
    where: { id_treino: 1 },
  });
  const ex1 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Supino plano",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 40,
      image_src: exercicio_image_name.supino_plano,
      treino: { connect: { id_treino: treino.id_treino } },

      sets: {
        create: [

          { set_valor: 12 },
          { set_valor: 10 },
          { set_valor: 8 },
          { set_valor: 6 },
        ]
      }
    },
    include: { sets: true }
  })

  const ex2 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Voador",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 40,
      image_src: exercicio_image_name.voador,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 15 },
          { set_valor: 12 },
          { set_valor: 10 },
          { set_valor: 6 },
        ]
      }
    },
    include: { sets: true }
  })

  const ex3 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Pull over Halter",
      status_exercicio: false,
      tipo_exercicio: "Mesma carga",
      carga: 20,
      image_src: exercicio_image_name.pull_over_halter,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },

        ]
      }
    },
    include: { sets: true }
  }





  )
  const ex4 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Extensão Corda",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 25,
      image_src: exercicio_image_name.extensao_triceps_corda_polia,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 }

        ]
      }
    },
    include: { sets: true }
  })

  const ex5 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Coice halter",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 9,
      image_src: exercicio_image_name.coice_biceps_halter,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 10 },
          { set_valor: 10 },
          { set_valor: 10 },
        ]
      }
    },
    include: { sets: true }
  })

  const ex6 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Abdominal infra",
      status_exercicio: false,
      tipo_exercicio: "Core",
      image_src: exercicio_image_name.abdominal_infra,
      carga: 0,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },
        ]
      }
    },
    include: { sets: true }
  }





  )
  const ex7 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Prancha",
      status_exercicio: false,
      tipo_exercicio: "Resistência",
      image_src: exercicio_image_name.prancha,
      carga: 0,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 60 },
          { set_valor: 60 },
          { set_valor: 60 },

        ]
      }
    },
    include: { sets: true }
  })

  const ex8 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Esteira",
      status_exercicio: false,
      tipo_exercicio: "Cardio",
      carga: 0,
      image_src: exercicio_image_name.estreira,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 10 },

        ]
      }
    },
    include: { sets: true }
  }
  )

  res.status(200).json("Done");
}






