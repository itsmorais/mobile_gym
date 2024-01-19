import prisma from "@/libs/prisma";
import { exercicio_image_name } from "@/utils/enum";

export default async function handler(req, res) {
    const treino = await prisma.treino.findUnique({
        where: { id_treino: 8 },
    });


    const ex41 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Elevação frontal",
            status_exercicio: false,
            tipo_exercicio: "Progressão de carga",
            carga: 9,
            image_src: exercicio_image_name.levantamento_frontal_halter,
            treino: { connect: { id_treino: treino.id_treino } },
            set: {
                create: [

                    { set_valor: 10 },
                    { set_valor: 10 },
                    { set_valor: 10 }

                ]
            }
        },
        include: { set: true }
    })

    const ex51 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Elevação lateral",
            status_exercicio: false,
            tipo_exercicio: "Progressão de carga",
            carga: 9,
            image_src: exercicio_image_name.levantamento_lateral_halter,
            treino: { connect: { id_treino: treino.id_treino } },
            set: {
                create: [

                    { set_valor: 10 },
                    { set_valor: 10 },
                    { set_valor: 10 },
                ]
            }
        },
        include: { set: true }
    })


    const ex7 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Desenvolvimento halter",
            status_exercicio: false,
            tipo_exercicio: "Progressão de carga",
            image_src: exercicio_image_name.desenvolvimento_ombro,
            carga: 0,
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

    const ex81 = await prisma.exercicio.create({
        data:
        {
            nome_exercicio: "Encolhimento Máquina",
            status_exercicio: false,
            tipo_exercicio: "Progressão de carga",
            carga: 0,
            image_src: exercicio_image_name.estreira,
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

    res.status(200).json("Done");
}






