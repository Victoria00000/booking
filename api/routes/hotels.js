import { Router } from "express";
import {
  createNewHotel,
  deleteHotel,
  getAllHotels,
  getCountByCity,
  getCountByType,
  getHotel,
  getHotelRooms,
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
routerHotels.get("/find/:id", getHotel);

// get all hotels: GET //
routerHotels.get("/", getAllHotels);

// get hotels by city: GET //
routerHotels.get("/countByCity", getCountByCity);

// get hotels by type: GET //
routerHotels.get("/countByType", getCountByType);

// get hotels by rooms: GET //
routerHotels.get("/room/:id", getHotelRooms);
