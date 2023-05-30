import { Router } from "express";
import {
  createNewHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// creating the router //
export const routerHotels = Router();

// create: POST //
routerHotels.post("/", verifyAdmin, createNewHotel);

// update: PUT //
routerHotels.put("/:id", verifyAdmin, updateHotel);

// delete: DELETE //
routerHotels.delete("/:id", verifyAdmin, deleteHotel);

// get 1 hotel: GET //
routerHotels.get("/:id", getHotel);

// get all hotels: GET //
routerHotels.get("/", getAllHotels);
