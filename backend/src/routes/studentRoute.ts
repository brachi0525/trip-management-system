import { Router } from "express";
import { createStudent, getStudents } from "../controllers/studentController";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get("/", checkAuth, getStudents)
router.post("/", createStudent)
export default router;
