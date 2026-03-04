import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Kết nối MongoDB thành công!");

  } catch (error) {
    console.error("❌ Lỗi:", error);
  }
}

connectDB();