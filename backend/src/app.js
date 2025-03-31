import express from "express";
import cors from "cors";

import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";
import userRoutes from "../routes/userRoutes.js";

const app = express();

app.use(cors());

app.use(
    cors({
        origin: "http://localhost:5173", // URL do seu front-end
    })
);

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("API rodando!");
});

const startServer = async () => {
    await connectDB();
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
};

startServer();
