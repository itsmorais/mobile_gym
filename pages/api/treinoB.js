import prisma from "@/libs/prisma";
import { exercicio_image_name } from "@/utils/enum";

export default async function handler(req, res) {
  /*   const Cria_Treino = await prisma.treino.create({
      data: {
        nome_treino: "Ombro e Costas",
        status_treino: false,
      }
    })
   */
  const treino = await prisma.treino.findUnique({
    where: { id_treino: 7 },
  });
  const ex1 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Puxador frontal Barra",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 30,
      image_src: exercicio_image_name.puxada_frontal,
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
      nome_exercicio: "Remada sentada",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 40,
      image_src: exercicio_image_name.remada,
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

  const ex3 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Remada cavalinho máquina",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      carga: 18,
      image_src: exercicio_image_name.remada_cavalinho_maquina,
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

  const ex6 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Hiper-extensor",
      status_exercicio: false,
      tipo_exercicio: "Core",
      image_src: exercicio_image_name.hiper_extensor,
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
  }
  )

  const ex10 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Rosca Direta W",
      status_exercicio: false,
      tipo_exercicio: "Mesma carga",
      carga: 20,
      image_src: exercicio_image_name.rosca_concentrada_w,
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

  const ex30 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Rosca alternada",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 10,
      image_src: exercicio_image_name.rosca_alternada_halter,
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

  const ex22 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Rosca Martelo",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 9,
      image_src: exercicio_image_name.rosca_martelo,
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


  res.status(200).json("Done");
}






