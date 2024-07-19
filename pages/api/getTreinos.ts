import mongoose, { Schema, Model, Document } from 'mongoose';
import connectDB from './lib/connect';
import { Treino } from '../../model/schema'
import { ExercicioSchema } from '../../model/schema'

let TreinoModel: Model<Treino & Document>;

try {
    // Try to retrieve the existing model
    TreinoModel = mongoose.models.Treino || mongoose.model<Treino & Document>('Treino', new Schema<Treino>({
        nome_treino: { type: String, required: true },
        status_treino: { type: Boolean },
        Exercicios: { type: [ExercicioSchema] }
    }));
} catch (error) {
    console.error("Error defining TreinoModel:", error);
    throw new Error("Error defining TreinoModel");
}

export default async function handler(req, res) {
    try {
        await connectDB();
    
        if (req.method === 'GET') {
            const treinos = await TreinoModel.find({});
            return res.status(200).json(treinos);
        }
    } catch(error) {
        console.error("Error handling request:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
 