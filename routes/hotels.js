import { Router } from "express";

export const routerHotels = Router();

// create //
routerHotels.post("/", (req, res) => {
  res.send("I am an Hotels creator");
});

routerHotels.get("/", (req, res) => {
  res.send("I am an Hotels endpoint");
});
