import { Router } from "express";
import { getAllUsers, usersSignup } from "../controller/user-controller.js";

const useRoutes = Router();
useRoutes.get('/', getAllUsers);
useRoutes.post('/signup', usersSignup);
export default useRoutes;