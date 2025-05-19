import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // loading .env

export default async function connectDB() {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      console.error("Erro: A variável de ambiente MONGODB_URI não está definida.");
      process.exit(1); // exit
    }

    await mongoose.connect(mongoURI);
    // console.log('MongoDB conectado com sucesso!')
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1); // exit
  }
}