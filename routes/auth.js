import { Router } from "express";
import { login, register } from "../controllers/auth.js";

export const routerAuth = Router();

// registering: POST //
routerAuth.post("/register", register);
// login: POST //
routerAuth.post("/login", login);
