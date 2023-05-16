import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  let {treinoId,quantidadeExercicios} = req.query
  treinoId = parseInt(treinoId)
  quantidadeExercicios = parseInt(quantidadeExercicios)

  const checarTreino = await prisma.exercicio.count({
    where:{
        id_treino: treinoId,
        status_exercicio:true
    }
  })


   if(checarTreino == quantidadeExercicios){
    await prisma.treino.update({
        data:{
            status_treino:true
        },
        where:{
            id_treino:treinoId
        }
    })

    const QuantidadeTreinosToDo = await prisma.treino.count({
        where:{
            status_treino : false
        }

    })

    if(QuantidadeTreinosToDo == 0){
        await prisma.treino.updateMany({
            data:{
                status_treino : false
            },
            
            
            
        })
        await prisma.exercicio.updateMany({
            data:{
                status_exercicio:false
            }
        })
    }

  }  
  res.status(200).json("Done");
}
  
  

    
         

