import { Router } from "express";

export const routerAuth = Router();

routerAuth.get("/", (req, res) => {
  res.send("I am an Auth endpoint");
});
