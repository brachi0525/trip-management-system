import Student from "../db/models/student";
import { student } from "../../../types/student";
export default class studentRepositoty {

    async create(data: student): Promise<student> {
        return Student.create(data);
    }
    async getAll(filters?: { classNumber?: number; studentID?: string }): Promise<student[]> {
        const query: any = {};

        if (filters?.classNumber) {
            query.classNumber = filters.classNumber;
        }

        if (filters?.studentID) {
            query.teacherID = filters.studentID;
        }

        return Student.find(query);
    }
    async getByID(id: string): Promise<student | null> {
        return await Student.findOne({ studentID: id });
    }
}