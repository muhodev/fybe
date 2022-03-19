import express from "express";
import {
  login,
  register,
  checkAuth,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/index.js";
import { protect, restrictTo } from "../middlewares/index.js";

export const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", protect, restrictTo("admin"), register);
authRoutes.post("/check-auth", protect, checkAuth);
authRoutes.post("/logout", protect, logout);

authRoutes.post("/forgotPassword", forgotPassword);
authRoutes.post("/resetPassword/:token", resetPassword);
