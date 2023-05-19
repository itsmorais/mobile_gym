import prisma from "@/libs/prisma";
export default async function handler(req, res) {
    const treino = await prisma.treino.findUnique({
        where: { id_treino: 4 },
    });
    const ex1 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Rosca Direta W",
            status_exercicio: false,
            tipo_exercicio: "Mesma carga",
            carga: 20,
            image_src: "",
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

    const ex2 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Rosca Martelo",
            status_exercicio: false,
            tipo_exercicio: "Drop",
            carga: 9,
            image_src: "",
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

    const ex3 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Rosca alternada",
            status_exercicio: false,
            tipo_exercicio: "Drop",
            carga: 10,
            image_src: "",
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
    }





    )
    const ex4 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Rosca inversa",
            status_exercicio: false,
            tipo_exercicio: "Progressão de carga",
            carga: 20,
            image_src: "",
            treino: { connect: { id_treino: treino.id_treino } },
            sets: {
                create: [

                    { set_valor: 8 },
                    { set_valor: 8 },
                    { set_valor: 8 },
                    { set_valor: 8 }

                ]
            }
        },
        include: { sets: true }
    })

    const ex5 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Abdominal full",
            status_exercicio: false,
            tipo_exercicio: "Core",
            carga: 0,
            image_src: "",
            treino: { connect: { id_treino: treino.id_treino } },
            sets: {
                create: [

                    { set_valor: 15 },
                    { set_valor: 15 },
                    { set_valor: 15 },
                    { set_valor: 15 }
                ]
            }
        },
        include: { sets: true }
    })

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


    const ex8 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Esteira",
            status_exercicio: false,
            tipo_exercicio: "Cardio",
            carga: 0,
            image_src: "8.webp",
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






