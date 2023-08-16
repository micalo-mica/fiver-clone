import express from "express";
import {
  register,
  login,
  logout,
  activateUser,
  forgot,
  reset,
} from "../controllers/auth.controller.js";

const router = express.Router();

// For registering a user
router.post("/register", register);

// For activating a user
router.post("/register/activate-user", activateUser);

// For login a user
router.post("/login/login-user", login);

// For logout a user
router.post("/logout/logout-user", logout);

// For a user forgot password
router.post("/forgot/email", forgot);

// For a user reset password
router.post("/forgot/new-password", reset);

export default router;
