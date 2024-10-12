import express from "express";
import { login, logout, signup } from "../controller/UserController.js";

const UserRouter = express.Router()

UserRouter.post('/signup', signup);
UserRouter.post('/login', login);
UserRouter.post('/logout', logout);


export default UserRouter