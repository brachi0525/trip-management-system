import  express  from "express";
import { createTeacher ,getTeachers} from "../controllers/teacherController";
const route = express.Router();

route.get("/", getTeachers)
route.post("/", createTeacher)
export default route;
