import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash } from "bcrypt";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get all users
  try {
    const users = await User.find();
    return res.json({ messege: "Sucessful", users });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};

export const usersSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // user signup
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const users = new User({ name, email, password: hashedPassword });

    await users.save();
    return res.json({ messege: "User Created", id: users._id.toString() });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};
