import prisma from "@/libs/prisma";
import { exercicio_image_name } from "@/utils/enum";
export default async function handler(req, res) {
/*     const CriarTreino = await prisma.treino.create({
      data: {
        nome_treino: "Peito e Tríceps",
        status_treino: false,
      }
    }) */
  
    const treino = await prisma.treino.findUnique({
      where: { id_treino: 6 },
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

  const ex2 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Supino Vertical",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 10,
      image_src: exercicio_image_name.supino_vertical,
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


  const ex3 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Peck Deck",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 30,
      image_src: exercicio_image_name.voador,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 15 },
          { set_valor: 12 },
          { set_valor: 10 },
          { set_valor: 6 },
        ]
      }
    },
    include: { set: true }
  })

  const ex6 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Crucifixo Plano",
      status_exercicio: false,
      tipo_exercicio: "Core",
      image_src: exercicio_image_name.crucifixo_plano,
      carga: 0,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 10 },
          { set_valor: 10 },
          { set_valor: 10 },
          { set_valor: 10 },
        ]
      }
    },
    include: { set: true }
  })


  const ex5 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Supino Articulado",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 9,
      image_src: exercicio_image_name.supino_articulado,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 },
        ]
      }
    },
    include: { set: true }
  })


  const ex4 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Extensão Corda",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 25,
      image_src: exercicio_image_name.extensao_triceps_corda_polia,
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






  const ex8 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Francês unilateral",
      status_exercicio: false,
      tipo_exercicio: "Mesma carga",
      carga: 0,
      image_src: exercicio_image_name.frances_unilateral,
      treino: { connect: { id_treino: treino.id_treino } },
      set: {
        create: [

          { set_valor: 10 },
          { set_valor: 10 },
          { set_valor: 10 },
          { set_valor: 10 },


        ]
      }
    },
    include: { set: true }
  }
  )

  res.status(200).json("Done");
}






