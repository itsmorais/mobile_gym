import connectDB from "./connect";
import User from "../../../model/User";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
    providers: [
        credentials({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    throw new Error("Missing credentials");
                }
                await connectDB();

                const user = await User.findOne({ email: credentials.email }).select("+password");
                if (!user) {
                    return null;
                }

                const isPasswordMatch = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordMatch) {
                    return null;
                }

                return {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30*24*60*60, // 30 DIAS
        updateAge: 24*60*60
    },
};

export default authOptions;
