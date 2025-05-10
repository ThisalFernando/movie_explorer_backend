import express from "express";
import { register, login, getUserDetails } from "../controllers/authMovieController.js";
import { authenticateUser } from "../middleware/authMovieMiddleware.js";

const router = express.Router();

router.post("/register", register); // Router path to login user
router.post("/login", login); // Router path to register user
router.get("/users/me", authenticateUser, getUserDetails); // Router path to fetch details of logged in user

export default router;
