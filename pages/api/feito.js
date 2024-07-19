import TreinoModel from '../../model/schema';
import connectDB from "./lib/connect";

export default async function handler(req, res) {
    await connectDB();

    let { status, exercicioId } = req.query;

    if (!status || !exercicioId) {
        return res.status(400).json({ message: "Invalid query parameters" });
    }

    const statusBool = status === 'true';

    try {
        const treino = await TreinoModel.findOne({ "Exercicios._id": exercicioId });

        if (!treino) {
            return res.status(404).json({ message: "Exercicio not found" });
        }

        const exercicio = treino.Exercicios.id(exercicioId);

        exercicio.status_exercicio = statusBool;

        await treino.save();

        res.status(200).json("Done");
    } catch (error) {
        res.status(400).json(error.message);
    }
}
