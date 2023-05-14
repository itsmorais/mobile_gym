import prisma from "@/libs/prisma";
export default async function handler(req, res) {
  const {carga,exercicioId} = req.query
  await prisma.exercicio.update({
    data:{
      carga: parseInt(carga),
    },
    where:{
      id_exercicio: parseInt(exercicioId)
    }
  })


  res.status(200).json("Done");
}
  
  

    
         

