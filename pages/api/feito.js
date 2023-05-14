import prisma from "@/libs/prisma";
export default async function handler(req, res) {
  let {status,exercicioId} = req.query

  if(status == 'true'){
    await prisma.exercicio.update({
      data:{
        status_exercicio: true,
      },
      where:{
        id_exercicio: parseInt(exercicioId)
      }
    })
  }
  else{
    await prisma.exercicio.update({
      data:{
        status_exercicio: false,
      },
      where:{
        id_exercicio: parseInt(exercicioId)
      }
    })
  }
  
  res.status(200).json("Done");
}
  
  

    
         

