import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompilationValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controller/chat-controllers.js";

// protected APT
const chatRoutes = Router();
chatRoutes.post(
    '/new', 
validate(chatCompilationValidator), 
verifyToken,
generateChatCompletion
);

export default chatRoutes;