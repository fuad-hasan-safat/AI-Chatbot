import { Router } from "express";
import { getAllUsers, usersLogin, usersSignup } from "../controller/user-controller.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";

const useRoutes = Router();
useRoutes.get('/', getAllUsers);
useRoutes.post('/signup', validate(signupValidator), usersSignup);
useRoutes.post('/login', validate(loginValidator), usersLogin);
export default useRoutes;