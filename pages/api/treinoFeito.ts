import TreinoModel from '../../model/schema';
import connectDB from "./lib/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    let { treinoId, quantidadeExercicios } = req.query;

    const quantidadeExerciciosInt = Array.isArray(quantidadeExercicios) ? parseInt(quantidadeExercicios[0]) : parseInt(quantidadeExercicios);

    try {
        const treino = await TreinoModel.findById(treinoId);
        if (!treino) {
            return res.status(404).json({ message: "Treino not found" });
        }

        const checarTreino = treino.Exercicios.filter(exercicio => exercicio.status_exercicio).length;
        if (checarTreino === quantidadeExerciciosInt) {
            treino.status_treino = true;
            await treino.save();
        }


        // Count the total of treinos with status equal false
        const QuantidadeTreinosToDo = await TreinoModel.countDocuments({
            status_treino: false
        });

        if (QuantidadeTreinosToDo === 0) {
            // Set all treinos status to false
            await TreinoModel.updateMany({}, { status_treino: false });

            // Set all exercicios' status to false
            await TreinoModel.updateMany({}, { $set: { "Exercicios.$[].status_exercicio": false } });
        }

        res.status(200).json("Done");
    } catch (error) {
        res.status(400).json(error.message);
    }
}