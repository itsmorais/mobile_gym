import TreinoModel from '../../model/schema';
import connectDB from "./lib/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    let { treinoId, quantidadeExercicios } = req.query;

    // Ensure treinoId and quantidadeExercicios are numbers
    const treinoIdInt = Array.isArray(treinoId) ? parseInt(treinoId[0]) : parseInt(treinoId);
    const quantidadeExerciciosInt = Array.isArray(quantidadeExercicios) ? parseInt(quantidadeExercicios[0]) : parseInt(quantidadeExercicios);

    if (isNaN(treinoIdInt) || isNaN(quantidadeExerciciosInt)) {
        return res.status(400).json({ message: "Invalid query parameters" });
    }

    try {
        // Count the number of active exercises in the given treino
        const treino = await TreinoModel.findById(treinoIdInt);
        if (!treino) {
            return res.status(404).json({ message: "Treino not found" });
        }

        const checarTreino = treino.Exercicios.filter(exercicio => exercicio.status_exercicio).length;

        if (checarTreino === quantidadeExerciciosInt) {
            // Update the status of the treino
            treino.status_treino = true;
            await treino.save();

            // Count the number of incomplete treinos with id_treino <= 5
            const QuantidadeTreinosToDo = await TreinoModel.countDocuments({
                _id: { $lte: 5 },
                status_treino: false
            });

            if (QuantidadeTreinosToDo === 0) {
                // Set all treinos' status to false
                await TreinoModel.updateMany({}, { status_treino: false });

                // Set all exercicios' status to false
                await TreinoModel.updateMany({}, { $set: { "Exercicios.$[].status_exercicio": false } });
            }
        }

        res.status(200).json("Done");
    } catch (error) {
        res.status(400).json(error.message);
    }
}
