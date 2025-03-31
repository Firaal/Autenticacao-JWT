import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("Erro: MONGO_URI não está definido no .env");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
        process.exit(1);
    }
};

export default connectDB;
