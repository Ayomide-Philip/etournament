import mongoose from "mongoose";
import { MONGO_DATABASE_NAME, MONGO_DATABASE_URL } from "@/libs/env.config";

export async function connectToDatabase() {
  if (!MONGO_DATABASE_URL) {
    throw new Error("MongoDB connection is missing");
  }
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB connection is connected");
    return;
  }

  if (mongoose.connection.readyState === 2) {
    console.log("Connecting.....");
    return;
  }

  try {
    await mongoose.connect(MONGO_DATABASE_URL, {
      dbName: MONGO_DATABASE_NAME,
    });
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
    throw err;
  }
}
