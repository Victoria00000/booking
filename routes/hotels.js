import { Router } from "express";
import {
  createNewHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";

// creating the router //
export const routerHotels = Router();

// create: POST //
routerHotels.post("/", createNewHotel);

// update: PUT //
routerHotels.put("/:id", updateHotel);

// delete: DELETE //
routerHotels.delete("/:id", deleteHotel);

// get 1 hotel: GET //
routerHotels.get("/:id", getHotel);

// get all hotels: GET //
routerHotels.get("/", getAllHotels);
