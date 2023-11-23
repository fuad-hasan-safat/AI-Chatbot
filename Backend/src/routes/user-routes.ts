import { Router } from "express";
import { getAllUsers, usersSignup } from "../controller/user-controller.js";
import { signupValidator, validate } from "../utils/validators.js";

const useRoutes = Router();
useRoutes.get('/', getAllUsers);
useRoutes.post('/signup', validate(signupValidator), usersSignup);
export default useRoutes;