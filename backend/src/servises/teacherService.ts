import teacherRepositoty from "../repositories/teacherRepository";
import { teacher } from "../../../types/teacher";
import { loginSchema, teacherSchema } from "../Validation/teacherSchema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { validate } from "../Validation/validate";
import {ErrorType} from "../../../types/error"
export class teacherService {
    private teacherRepo = new teacherRepositoty();

    async createteacher(data: teacher) {
        const existingTeacher = await this.teacherRepo.getByID(data.teacherID);
        if (existingTeacher) {
            throw new ErrorType("Teacher already exists",401);
        }
        const validTeacher = validate(teacherSchema, data)
        const pass = await bcrypt.hash(validTeacher.password, 10);
        const newt: teacher = {
            fullName: validTeacher.fullName,
            teacherID: validTeacher.teacherID,
            classNumber: validTeacher.classNumber,
            password: pass,
        }

        return this.teacherRepo.create(newt);

    }

    async login(data: Partial<teacher>) {

        const validData = validate(loginSchema, data);
        const teacher = await this.teacherRepo.getByID(validData.teacherID);
        if (!teacher) {
            throw new ErrorType("Teacher not found",401);
        }
        if (await bcrypt.compare(validData.password, teacher.password)) {
            const JWT_SECRET = process.env.JWT_SECRET;
            const token = jwt.sign({ id: validData.teacherID, role: "teacher" ,teacherID:teacher.teacherID, classNumber:teacher.classNumber}, JWT_SECRET!)
            return token
        }
        else
            throw new ErrorType("Invalid credentials",401);

    }

    async getTeachers() {
        return this.teacherRepo.getAll();
    }
}