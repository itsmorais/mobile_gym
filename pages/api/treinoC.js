import prisma from "@/libs/prisma";
export default async function handler(req, res) {
  const treino = await prisma.treino.findUnique({
    where: { id_treino: 3 },
  });
  const ex1 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Cadeira Adutora",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 40,
      image_src: "17.webp",
      treino: { connect: { id_treino: treino.id_treino } },

      sets: {
        create: [

          { set_valor: 6 },
          { set_valor: 8 },
          { set_valor: 10 },
          { set_valor: 12 },
        ]
      }
    },
    include: { sets: true }
  })

  const ex2 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Cadeira abdutora",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 40,
      image_src: "18.webp",
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 6 },
          { set_valor: 8 },
          { set_valor: 10 },
          { set_valor: 12 },
        ]
      }
    },
    include: { sets: true }
  })

  const ex3 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Mesa Flexora",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga + falha",
      carga: 25,
      image_src: "19.webp",
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 12 },
          { set_valor: 10 },
          { set_valor: 8 },

        ]
      }
    },
    include: { sets: true }
  }





  )
  const ex4 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Cadeira extensora",
      status_exercicio: false,
      tipo_exercicio: "Drop",
      carga: 60,
      image_src: "20.webp",
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 8 },
          { set_valor: 10 },
          { set_valor: 12 },
          { set_valor: 15 }

        ]
      }
    },
    include: { sets: true }
  })

  const ex5 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Agachamento livre",
      status_exercicio: false,
      tipo_exercicio: "Mesma carga",
      carga: 15,
      image_src: "21.webp",
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 12 },
          { set_valor: 12 },
          { set_valor: 12 },
        ]
      }
    },
    include: { sets: true }
  })

  const ex6 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Leg-press",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      image_src: "22.webp",
      carga: 120,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 8 },
          { set_valor: 8 },
          { set_valor: 8 },
        ]
      }
    },
    include: { sets: true }
  }





  )
  const ex7 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Gêmeos sentado",
      status_exercicio: false,
      tipo_exercicio: "Progressão de carga",
      image_src: "23.webp",
      carga: 30,
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 20 },
          { set_valor: 15 },
          { set_valor: 12 },
          { set_valor: 10 }


        ]
      }
    },
    include: { sets: true }
  })

  const ex8 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Abdominal lateral ",
      status_exercicio: false,
      tipo_exercicio: "Cardio",
      carga: 0,
      image_src: "24.webp",
      treino: { connect: { id_treino: treino.id_treino } },
      sets: {
        create: [

          { set_valor: 20 },
          { set_valor: 20 },
          { set_valor: 20 },
          { set_valor: 20 },



        ]
      }
    },
    include: { sets: true }
  }
  )

  const ex9 = await prisma.exercicio.create({
    data:
    {
      nome_exercicio: "Prancha",
      status_exercicio: false,
      tipo_exercicio: "Resistência",
      image_src: "7.webp",
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

  res.status(200).json("Done");
}






