import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

// creating the router //
export const routerUsers = Router();

// create user is in register controller (auth.js) //

// check if user is logged in: GET //
routerUsers.get("/check-auth", verifyToken, (req, res, next) => {
  res.send("You are logged in");
});

// get all users: GET //
routerUsers.get("/", getAllUsers);

// get user by id: GET //
routerUsers.get("/:id", getUser);

// delete user by id: DELETE //
routerUsers.delete("/:id", deleteUser);

// update user by id: PUT //
routerUsers.put("/:id", updateUser);
