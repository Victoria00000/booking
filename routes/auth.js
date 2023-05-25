import { Router } from "express";
import { register } from "../controllers/auth.js";

export const routerAuth = Router();

// create: POST //
routerAuth.post("/register", register);
