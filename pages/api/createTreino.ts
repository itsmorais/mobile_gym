import TreinoModel from '../../model/schema'
import { Exercicio } from '../../model/schema'
import connectDB from "./lib/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectDB();

        if (req.method === 'POST') {
            const { nome_treino, status_treino, Exercicios } = req.body;

            const exercicios: Exercicio[] = Exercicios.map((exercicio: Exercicio) => ({
                nome_exercicio: exercicio.nome_exercicio,
                status_exercicio: exercicio.status_exercicio,
                tipo_exercicio: exercicio.tipo_exercicio,
                carga: exercicio.carga,
                image_src: exercicio.image_src,
                set: exercicio.set
            }))


            const novoTreino = new TreinoModel({
                nome_treino: nome_treino,
                status_treino: status_treino,
                Exercicios: exercicios
            });

            const saveTreino = await novoTreino.save()
            return res.status(201).json(saveTreino);


        }

    } catch (error: any) {
        return res.status(400).json(error.message)
    }



}