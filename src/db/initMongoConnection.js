import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // en üstte

export const initMongoConnection = async () => {
  try {
    // Debug: env değişkenlerini logla
    console.log("MONGO_USER:", process.env.MONGO_USER);
    console.log("MONGO_PASSWORD:", process.env.MONGO_PASSWORD);
    console.log("MONGO_URL:", process.env.MONGO_URL);
    console.log("MONGO_DB:", process.env.MONGO_DB);

    const uri = `mongodb+srv://${encodeURIComponent(
      process.env.MONGO_USER
    )}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${
      process.env.MONGO_URL
    }/${process.env.MONGO_DB}`;

    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Mongo connection failed:", error);
    process.exit(1);
  }
};
