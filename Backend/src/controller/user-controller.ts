import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";

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
    const existingUser = await User.findOne({email:email});
    if(existingUser) return res.status(401).send("<h1>user already exist</h1>"); 
    const hashedPassword = await hash(password, 10);
    const users = new User({ name, email, password: hashedPassword });

    await users.save();
    return res.json({ messege: "User Created", id: users._id.toString() });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};

export const usersLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // user signup
  try {
    const {email, password } = req.body;
    const user = await User.findOne({email:email});
    if(!user) return res.status(401).send("User dose not exist!");
    const isPasswordCorrect = await compare(password, user.password);
    if(!isPasswordCorrect) return res.status(403).send("Incorrect password");

 
    return res.status(200).json({ messege: "Log in sucessfully", id: user._id.toString() });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};
