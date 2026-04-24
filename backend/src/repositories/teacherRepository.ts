import Teacher from "../db/models/teacher";
import { teacher } from "../../../types/teacher"

export default class teacherRepository {

    async create(data: teacher): Promise<teacher> {
        return Teacher.create(data);
    }
    async getAll(): Promise<teacher[]> {
        return Teacher.find() || {};
    }
    async getByID(id:String): Promise<teacher|null> {
        return Teacher.findOne({teacherID:id});
    }
}