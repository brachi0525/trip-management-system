import teacherRepositoty from "../repositories/teacherRepository";
import { teacher } from "../types/teacher";

export class teacherService {
    private teacherRepo = new teacherRepositoty();

    async createteacher(data: teacher) {
        const newteacher = await this.teacherRepo.create(data);
        return newteacher;
    }
    async getTeachers() {
        const teachers = await this.teacherRepo.getAll();
        return teachers;
    }
}