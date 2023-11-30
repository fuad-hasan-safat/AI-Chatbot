import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  const user = await User.findById(res.locals.jwtData.id);
  if (!user) {
    return res
      .status(401)
      .json({ message: "User not registered or Token malfunctioned" });
  }

  // grab chats of user
  // const chats = user.chats.map(({role, content }) => ({role, content}));
  const chats = user.chats.map((item) => {
    
    return {
      role: item.role,
      content: item.content,
    };
  });



  // send all chats with new one to openai API

  // get lattest response
};
