import  express  from "express";
import { createTeacher ,getTeachers,login} from "../controllers/teacherController";
import { checkAuth } from "../middlewares/checkAuth";
const route = express.Router();

route.get("/",checkAuth, getTeachers)
route.post("/register", createTeacher)
route.post("/login", login)
export default route;
