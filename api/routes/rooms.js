import { Router } from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// creating the router for rooms //
export const routerRooms = Router();

// creating a room: POST //
routerRooms.post("/:hotelid", verifyAdmin, createRoom);

// updating a room:  PUT //
routerRooms.put("/:id", verifyAdmin, updateRoom);

// deleting a room: DELETE //
routerRooms.delete("/:id", verifyAdmin, deleteRoom);

// getting a room: GET //
routerRooms.get("/:id", getRoom);

// getting all the rooms: GET //
routerRooms.get("/", getAllRooms);
