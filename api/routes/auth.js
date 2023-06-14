import { Router } from "express";
import { login, register } from "../controllers/auth.js";

// creating ROUTER for auth //
export const routerAuth = Router();

// registering: POST //
routerAuth.post("/register", register);

// login: POST //
routerAuth.post("/login", login);
