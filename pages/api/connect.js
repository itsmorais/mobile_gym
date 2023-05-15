const sqlite3 = require('sqlite3').verbose()
export default async function handler(req, res) {
  const db = new sqlite3.Database('ubuntu@ec2-34-226-196-11.compute-1.amazonaws.com:/home/ubuntu/gym/prisma/dev.db',(err) =>{
    if(err){console.log(err.message)
    }
    console.log("Conectou!")
  }
  
  )


  res.status(200).json("Done");
}
  
  

    
         

