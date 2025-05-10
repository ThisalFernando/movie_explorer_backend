import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    movieCode: {type: String, required: true},
    movieName: {type: String},
});

export default mongoose.model("Favorite", favoriteSchema);
