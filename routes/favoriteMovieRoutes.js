import express from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {addFavorite, deleteFavorite, getFavorites} from "../controllers/favoriteMovieController.js";

const router = express.Router();

router.post("/", authenticateUser, addFavorite); // Router path to add favorite countries
router.delete("/:movieId", authenticateUser, deleteFavorite); // Router path to remove countries from favorites
router.get("/", authenticateUser, getFavorites); // Router path to fetch favorite countries

export default router;
