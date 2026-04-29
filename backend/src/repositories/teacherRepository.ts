import Teacher from "../db/models/teacher";
import { teacher } from "../../../types/teacher"

export default class teacherRepository {

    async create(data: teacher): Promise<teacher> {
        return Teacher.create(data);
    }
    async getAll(filters?: { classNumber?: number; teacherID?: string }): Promise<teacher[]> {
        const query: any = {};

        if (filters?.classNumber) {
            query.classNumber = filters.classNumber;
        }

        if (filters?.teacherID) {
            query.teacherID = filters.teacherID;
        }

        return Teacher.find(query);
    }
    async getByID(id: String): Promise<teacher | null> {
        return Teacher.findOne({ teacherID: id });
    }
}