import mongoose from "mongoose";

const userMovieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["user", "admin"], default: "user"}
}, {timestamps: true});

export default mongoose.model("UserMovie", userMovieSchema);
