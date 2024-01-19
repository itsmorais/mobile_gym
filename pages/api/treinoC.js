import prisma from "@/libs/prisma";
import { exercicio_image_name } from "@/utils/enum";

export default async function handler(req, res) {

  const treino = await prisma.treino.findUnique({
    where: { id_treino: 9 },
  });
  const ex1 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Cadeira Adutora",
      status_exercicio: false,
      tipo_exercicio: "Mesma carga",
      carga: 20,
      image_src: exercicio_image_name.adutor,
      treino: { connect: { id_treino: treino.id_treino } },

      set: {
        create: [

          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },

        ]
      }
    },
    include: { set: true }
  })

  const ex2 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Cadeira abdutora",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 40,
      image_src: exercicio_image_name.abdutor,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },
        ]
      }
    },
    include: { set: true }
  })

  const ex3 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Mesa Flexora",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga + falha",
      carga: 25,
      image_src: exercicio_image_name.mesa_flexora,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },


        ]
      }
    },
    include: { set: true }
  }





  )
  const ex4 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Cadeira extensora",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 60,
      image_src: exercicio_image_name.cadeira_extensora,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },
          { set_valor: 15 },

        ]
      }
    },
    include: { set: true }
  })

  const ex5 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Agachamento livre",
      status_exercicio: false,
      tipo_exercicio: "Mesma carga",
      carga: 15,
      image_src: exercicio_image_name.agachamento_livre,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 }

        ]
      }
    },
    include: { set: true }
  })

  const ex6 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Leg-press",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      image_src: exercicio_image_name.legpress,
      carga: 120,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 }

        ]
      }
    },
    include: { set: true }
  }





  )
  const ex7 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Gêmeos sentado",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      image_src: exercicio_image_name.gemeos_sentado,
      carga: 30,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 },



        ]
      }
    },
    include: { set: true }
  })



  res.status(200).json("Done");
}






