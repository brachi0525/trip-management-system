import { Router } from "express";
import { createStudent ,getStudents} from "../controllers/studentController";
const router = Router();

router.get("/", getStudents)
router.post("/", createStudent)
export default router;
