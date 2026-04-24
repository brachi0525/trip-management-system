import teacherRepositoty from "../repositories/teacherRepository";
import { teacher } from "../../../types/teacher";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export class teacherService {
    private teacherRepo = new teacherRepositoty();
    async createteacher(data: teacher) {

        const { fullName, teacherID, password, classNumber } = data

        const pass = await bcrypt.hash(password, 10);
        const newt: teacher = {
            fullName: fullName,
            teacherID: teacherID,
            classNumber: classNumber,
            password: pass,
        }

        const newteacher = await this.teacherRepo.create(newt);
        return newteacher;
    }
    async login(data: Partial<teacher>) {
        const { teacherID = '', password } = data;
        const teacherr = await this.teacherRepo.getByID(teacherID);
        if (!teacherr || !password)
            throw new Error("Teacher not found");
        if (await bcrypt.compare(password, teacherr.password)) {
            const JWT_SECRET = process.env.JWT_SECRET;

            const token = jwt.sign({ id: teacherID, role: "teacher" },JWT_SECRET!)
            return token
        }
        else
            throw new Error("Invalid credentials");

    }

    async getTeachers() {
        const teachers = await this.teacherRepo.getAll();
        return teachers;
    }
}