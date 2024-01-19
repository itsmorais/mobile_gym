// Make sure you have the following at the beginning of your API route file:
import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    let { nome_usuario, senha } = req.body;

    const user = prisma.usuario.findFirst({
      where: {
        nome_usuario: nome_usuario,
        senha: senha
      }
    })

    if (user) {
      res.status(200).json({ id_usuario: (await user).id_usuario });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
