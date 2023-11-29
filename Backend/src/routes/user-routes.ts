import { Router } from "express";
import { getAllUsers, usersLogin, usersSignup, verifyUser } from "../controller/user-controller.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const useRoutes = Router();
useRoutes.get('/', getAllUsers);
useRoutes.post('/signup', validate(signupValidator), usersSignup);
useRoutes.post('/login', validate(loginValidator), usersLogin);
useRoutes.get('/auth-status',verifyToken, verifyUser);

export default useRoutes;