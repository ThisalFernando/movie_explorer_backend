import FavoriteMovie from "../models/FavoriteMovie.js";

// Add favorite countries
export const addFavorite = async (req, res) => {
   try {
    const { movieId, title, poster_path, release_date, vote_average } = req.body;

    // Check if already favorited
    const exists = await FavoriteMovie.findOne({ userId: req.user.id, movieId });
    if (exists) return res.status(400).json({ message: "Movie already in favorites" });

    const favorite = new FavoriteMovie({
      userId: req.user.id,
      movieId,
      title,
      poster_path,
      release_date,
      vote_average,
    });

    await favorite.save();
    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove a favorite movie
export const deleteFavorite = async (req, res) => {
  try {
    const { movieId } = req.params;
    await FavoriteMovie.findOneAndDelete({ userId: req.user.id, movieId });
    res.status(200).json({ message: "Removed from favorites" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all favorites for a user
export const getFavorites = async (req, res) => {
  try {
    const favorites = await FavoriteMovie.find({ userId: req.user.id });
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

