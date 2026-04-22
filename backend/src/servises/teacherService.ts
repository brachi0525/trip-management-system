import { error } from "node:console";
import teacherRepositoty from "../repositories/teacherRepository";
import { teacher } from "../types/teacher";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export class teacherService {
    private teacherRepo = new teacherRepositoty();

    async createteacher(data: teacher) {
        const { fullName, teacherID, password, classNumber } = data
        const pass = await bcrypt.hash(password, 10);
        const newt = {
            fullName,
            teacherID,
            classNumber,
            password: pass,
        }
        const newteacher = await this.teacherRepo.create(newt);
        return newteacher;
    }
    async login(data: Partial<teacher>) {
        const { teacherID = '', password } = data;
        const teacherr = await this.teacherRepo.getByID(teacherID);
        if (!teacherr || !password)
            throw error
        if (await bcrypt.compare(password, teacherr.password)) {
            const token = jwt.sign({ id: teacherID, role: "teacher" }, "123")
            return token
        }
        else
            throw error






    }

    async getTeachers() {
        const teachers = await this.teacherRepo.getAll();
        return teachers;
    }
}