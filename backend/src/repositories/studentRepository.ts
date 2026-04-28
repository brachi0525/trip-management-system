import Student from "../db/models/student";
import { student } from "../../../types/student";
export default class studentRepositoty {

    async create(data: student): Promise<student> {
        return Student.create(data);
    }
    async getAll(): Promise<student[]> {
        return Student.find();
    }
    async getByID(id: String): Promise<student | null> {
        return Student.findOne({ studentID: id });
    }
}