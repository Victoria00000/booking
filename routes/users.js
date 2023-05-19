import { Router } from "express";

export const routerUsers = Router();

routerUsers.get("/", (req, res) => {
  res.send("This is the users endpoint");
});
