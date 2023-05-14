import prisma from "@/libs/prisma"
export default async function handler(req, res) {
 const treinos = await prisma.treino.create({
  data:{
    nome_treino: "Peito e Tríceps",
    status_treino:false,
    exercicios:{
      create:[{
        nome_exercicio:"Supino Plano",
        status_exercicio:false,
        tipo_exercicio:"Progressão de carga",
        carga:20,
        sets:{
          create:[
            {set_valor:12},
            {set_valor:10},
            {set_valor:8},
            {set_valor:6},
          ]
        }
      },
    ]
  }
},
include:{
  exercicios:{
    include:{
      sets:true
    }
  }
}
 })
 
  res.status(200).json({treinos})
}
