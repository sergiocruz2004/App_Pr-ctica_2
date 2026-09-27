import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://admin:password123@mongo:27017/appdb?authSource=admin";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB is connected");
    console.log(MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
