import { Request, Response } from "express";
import { teacherService } from "../servises/teacherService";

const teacherServe = new teacherService()

const createTeacher = async (req: Request, res: Response) => {
    try {
        const techeData = req.body
        const result = await teacherServe.createteacher(techeData)
        res.status(201).json(result);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}
const getTeachers = async (req: Request, res: Response) => {
    try {

        const result = await teacherServe.getTeachers()
        res.status(201).json(result);

    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}
export { createTeacher, getTeachers }