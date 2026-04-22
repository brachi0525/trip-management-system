import  express  from "express";
import { createTeacher ,getTeachers,login} from "../controllers/teacherController";

const route = express.Router();

route.get("/", getTeachers)
route.post("/register", createTeacher)
route.get("/login", login)
export default route;
