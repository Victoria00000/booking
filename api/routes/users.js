import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// creating the router //
export const routerUsers = Router();

// create user is in register controller (auth.js) //

// check auth-token: GET //
routerUsers.get("/check-auth", verifyToken, (req, res, next) => {
  res.send("Hi user, you are logged in. :D");
});

// check if user is logged: GET //
routerUsers.get("/check-user/:id", verifyUser, (req, res, next) => {
  res.send("Hi user, you are logged in, and you can delete this account. :D");
});

// check if user is admin: GET //
routerUsers.get("/check-admin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hi admin, you are logged in, an you can delete all accounts. :D");
});

// get all users: GET //
routerUsers.get("/", verifyAdmin, getAllUsers);

// get user by id: GET //
routerUsers.get("/:id", verifyUser, getUser);

// delete user by id: DELETE //
routerUsers.delete("/:id", verifyUser, deleteUser);

// update user by id: PUT //
routerUsers.put("/:id", verifyUser, updateUser);
