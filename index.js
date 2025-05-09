import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import favoriteMovieRoutes from "./routes/favoriteMovieRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "https://movie-explorer-omega-green.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Movie Explorer Backend is Running ✅");
});
  
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/favorite-movies", favoriteMovieRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
