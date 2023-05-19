import { Router } from "express";

export const routerRooms = Router();

routerRooms.get("/", (req, res) => {
  res.send("This is the rooms endpoint");
});
