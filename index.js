import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(3000, () => {
  connectDB();
  console.log("Server started on port 3000");
});
