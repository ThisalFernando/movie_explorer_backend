import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movieId: { type: Number, required: true },
  title: String,
  poster_path: String,
  release_date: String,
  vote_average: Number,
}, { timestamps: true });

export default mongoose.model("Favorite", favoriteSchema);
