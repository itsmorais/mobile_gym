import TreinoModel from '../../model/schema';
import connectDB from "./lib/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();

    const { carga, exercicioId } = req.query;

    // Ensure carga and exercicioId are strings
    const cargaStr = Array.isArray(carga) ? carga[0] : carga;
    const exercicioIdStr = Array.isArray(exercicioId) ? exercicioId[0] : exercicioId;

    if (!cargaStr || !exercicioIdStr) {
        return res.status(400).json({ message: "Invalid query parameters" });
    }

    try {
        const treino = await TreinoModel.findOne({ "Exercicios._id": exercicioIdStr });

        if (!treino) {
            return res.status(404).json({ message: "Exercicio not found" });
        }

        const exercicio = treino.Exercicios.id(exercicioIdStr);

        exercicio.carga = parseInt(cargaStr);

        await treino.save();

        res.status(200).json("Done");
    } catch (error) {
        res.status(400).json(error.message);
    }
}
