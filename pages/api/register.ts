import { register } from "./actions/register";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const result = await register(req.body);
            if (result?.error) {
                return res.status(400).json({ error: result.error });
            }
            res.status(201).json({ message: "User registered successfully!" });
        } catch (error) {
            console.error("Registration failed:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
