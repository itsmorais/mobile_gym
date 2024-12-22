import TreinoModel from '../../model/schema';
import connectDB from "./lib/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    try {
        const { treinoId, quantidadeExercicios } = req.query;

        // Input validation
        if (!treinoId || !quantidadeExercicios) {
            return res.status(400).json({ message: "Missing treinoId or quantidadeExercicios." });
        }

        const quantidadeExerciciosInt = Array.isArray(quantidadeExercicios)
            ? parseInt(quantidadeExercicios[0])
            : parseInt(quantidadeExercicios);

        // Fetch treino and filter exercicios with status_exercicio = true directly in MongoDB
        const treino = await TreinoModel.findById(treinoId);
        if (!treino) {
            return res.status(404).json({ message: "Treino not found" });
        }

        const completedExerciciosCount = treino.Exercicios.filter(exercicio => exercicio.status_exercicio).length;

        // Update treino status if all exercises are completed
        if (completedExerciciosCount === quantidadeExerciciosInt && !treino.status_treino) {
            treino.status_treino = true;
            await treino.save();
        }

        // Count pending treinos
        const QuantidadeTreinosToDo = await TreinoModel.countDocuments({ status_treino: false });

        // If all treinos are complete, reset all treinos and exercicios statuses in one query
        if (QuantidadeTreinosToDo === 0) {
            await TreinoModel.updateMany(
                {}, // No filter: apply to all documents
                {
                    $set: {
                        status_treino: false,
                        "Exercicios.$[].status_exercicio": false, // Reset all embedded array statuses
                    },
                }
            );
        }

        return res.status(200).json({ message: "Operation completed successfully." });
    } catch (error) {
        console.error("Error updating treino:", error);
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}
