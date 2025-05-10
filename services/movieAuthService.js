import bcrypt from "bcryptjs";
import UserMovie from "../models/UserMovie.js";
import { generateToken } from "../utils/jwtUtils.js";

// Service for register
export const registerUser = async ({ name, address, email, password }) => {
    const existingUser = await UserMovie.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserMovie.create({ name, address, email, password: hashedPassword });

    return { user: newUser, token: generateToken(newUser) };
};

// Service for login
export const loginUser = async ({ email, password }) => {
    const user = await UserMovie.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    return { user, token: generateToken(user) };
};
