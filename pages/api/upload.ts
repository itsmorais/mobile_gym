import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const chunks = [];

        req.on('data', (chunk) => {
            chunks.push(chunk);
        });

        req.on('end', () => {
            const buffer = Buffer.concat(chunks);
            const filePath = path.resolve('.', 'uploads', 'image.png'); // Saves to the `uploads` folder

            fs.writeFileSync(filePath, buffer);
            res.status(200).json({ message: 'File uploaded successfully' });
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}