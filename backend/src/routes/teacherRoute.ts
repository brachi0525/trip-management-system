import express from "express";
import { createTeacher, getTeachers, login } from "../controllers/teacherController";
import { checkAuth } from "../middlewares/checkAuth";
import {adminAuth} from "../middlewares/adminAuth"
const route = express.Router();

route.get("/", checkAuth, getTeachers)
route.post("/register", checkAuth,adminAuth, createTeacher)
route.post("/login", login)
export default route;
