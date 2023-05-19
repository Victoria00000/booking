import { Router } from "express";

export const routerHotels = Router();

routerHotels.get("/", (req, res) => {
  res.send("I am an Hotels endpoint");
});
