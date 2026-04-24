import studentRepositoty from "../repositories/studentRepository";
import { student } from "../../../types/student";

export class studentService {
    private studentRepo = new studentRepositoty();

    async createstudent(data: student) {
        const newstudent = await this.studentRepo.create(data);
        return newstudent;
    }
    async getstudents() {
        const students = await this.studentRepo.getAll();
        return students;
    }
}