import prisma from "@/libs/prisma";
export default async function handler(req, res) {
  const treino = await prisma.treino.findUnique({
    where: { id_treino: 2 },
  });
  const ex1 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Puxador frontal Barra",
        status_exercicio: false,
        tipo_exercicio: "Progressão de carga",
        carga: 40,
        image_src: "10.webp" ,
        treino: { connect: { id_treino: treino.id_treino }},
        
        sets: {
          create: [
            
              { set_valor: 12 },
              { set_valor: 10 },
              { set_valor: 8 },
              { set_valor: 6 },
         ]
        }
      },
      include:{sets:true}
      })

  const ex2 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Remada sentada",
        status_exercicio: false,
        tipo_exercicio: "Progressão de carga",
        carga: 40,
        image_src:"11.webp",
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 15 },
              { set_valor: 12 },
              { set_valor: 10 },
              { set_valor: 6 },
         ]
        }
      },
      include:{sets:true}
      })

  const ex3 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Dev com halter",
        status_exercicio: false,
        tipo_exercicio: "Drop",
        carga: 18,
        image_src:"12.webp",
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 6 },
              { set_valor: 8 },
              { set_valor: 12 },
              
         ]
        }
      },
      include:{sets:true}
      }



  

  )  
  const ex4 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Elevação frontal",
        status_exercicio: false,
        tipo_exercicio: "Drop",
        carga: 9,
        image_src:"13.webp",
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 12 },
              { set_valor: 12 },
              { set_valor: 12 }
             
         ]
        }
      },
      include:{sets:true}
      })

  const ex5 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Elevação lateral",
        status_exercicio: false,
        tipo_exercicio: "Drop",
        carga: 9,
        image_src:"14.webp",
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 12 },
              { set_valor: 12 },
              { set_valor: 12 },
         ]
        }
      },
      include:{sets:true}
      })

  const ex6 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Hiper-extensor",
        status_exercicio: false,
        tipo_exercicio: "Core",
        image_src:"15.webp",
        carga: 0,
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 10 },
              { set_valor: 10 },
              { set_valor: 10 },
              { set_valor: 10 },
         ]
        }
      },
      include:{sets:true}
      }



  

  )  
  const ex7 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Flexão de braço",
        status_exercicio: false,
        tipo_exercicio: "Resistência",
        image_src:"16.webp",
        carga: 0,
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 20 },
              { set_valor: 20 },
              { set_valor: 20 },
              
         ]
        }
      },
      include:{sets:true}
      })

  const ex8 = await prisma.exercicio.create({
    data: 
      {
        nome_exercicio: "Esteira",
        status_exercicio: false,
        tipo_exercicio: "Cardio",
        carga: 0,
        image_src:"9.webp",
        treino: { connect: { id_treino: treino.id_treino } },
        sets: {
          create: [
            
              { set_valor: 10 },
         
         ]
        }
      },
      include:{sets:true}
      }



  

  )  

  res.status(200).json("Done");
}
  
  

    
         

