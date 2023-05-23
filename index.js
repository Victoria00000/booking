import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { routerAuth } from "./routes/auth.js";
import { routerHotels } from "./routes/hotels.js";
import { routerRooms } from "./routes/rooms.js";
import { routerUsers } from "./routes/users.js";

// initilice express app //
const app = express();
// config dotenv //
dotenv.config();

// connect to mongoDB //
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// mongoDB events //
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.get("/", (req, res) => {
  res.send("Hola Mundo con express");
});

// middlewares //
app.use(express.json());

// endpoints
app.use("/api/auth", routerAuth);
app.use("/api/hotels", routerHotels);
app.use("/api/rooms", routerRooms);
app.use("/api/users", routerUsers);

// error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "The request went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

// server //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
