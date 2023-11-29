import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
import jwt from 'jsonwebtoken';

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
    const user = new User({ name, email, password: hashedPassword });

    await user.save();

    // create token and store cookie
       res.clearCookie(COOKIE_NAME, {
      httpOnly:true,
      domain:"localhost",
      signed: true,
      path:"/",
    });
    
    const token = createToken(user._id.toString(), user.email,"7d");
    const expires = new Date();
    expires.setDate(expires.getDate()+7);
    res.cookie(COOKIE_NAME, token,{
      path:"/", 
      domain:"localhost", 
      expires, 
      httpOnly:true, 
      signed:true,
      });



    return res.status(200).json({ messege: "User Created", name: user.name, email: user.email });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};

export const usersLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // user login
  try {
    const {email, password } = req.body;
    const user = await User.findOne({email:email});
    if(!user) return res.status(401).send("User dose not exist!");
    const isPasswordCorrect = await compare(password, user.password);
    if(!isPasswordCorrect) return res.status(403).send("Incorrect password");
    
    res.clearCookie(COOKIE_NAME, {
      httpOnly:true,
      domain:"localhost",
      signed: true,
      path:"/",
    });
    
    const token = createToken(user._id.toString(), user.email,"7d");
    const expires = new Date();
    expires.setDate(expires.getDate()+7);
    res.cookie(COOKIE_NAME, token,{
      path:"/", 
      domain:"localhost", 
      expires, 
      httpOnly:true, 
      signed:true,
      });

    return res.status(200).json({ messege: "Log in sucessfully",  name: user.name, email: user.email  });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // user verify
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if(!user) return res.status(401).send("User dose not register or Token malfunctioned!");

    console.log(user._id.toString(), res.locals.jwtData.id);
    if(user._id.toString() !== res.locals.jwtData.id){
      return res.status(401).send("Permission denied");
    }

    return res.status(200).json({ messege: "Log in sucessfully",  name: user.name, email: user.email  });
  } catch (error) {
    return res.status(404).json({ messege: "Errors", cause: error.message });
  }
};
