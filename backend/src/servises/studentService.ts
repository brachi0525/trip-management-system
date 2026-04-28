import studentRepositoty from "../repositories/studentRepository";
import { student } from "../../../types/student";
import { validate } from "../Validation/validate";
import { studentSchema } from "../Validation/studentSchema";
import { ErrorType } from "../../../types/error";

export class studentService {
    private studentRepo = new studentRepositoty();

    async createstudent(data: student) {
        const validStudent = validate(studentSchema, data);

        const existingStudent = await this.studentRepo.getByID(validStudent.studentID);

        if (existingStudent) {
            throw new ErrorType("Student already exists", 401);
        }

        return this.studentRepo.create(validStudent);
    }

    async getstudents() {
        return this.studentRepo.getAll();
    }
}