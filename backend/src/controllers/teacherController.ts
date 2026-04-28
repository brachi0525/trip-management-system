import { Request, Response } from "express";
import { teacherService } from "../servises/teacherService";

const teacherServe = new teacherService()
const login = async (req: Request, res: Response) => {
    try {
        const token = await teacherServe.login(req.body);
        return res.status(200).json({ token });

    } catch (err: any) {
        return res.status(err.status||500).json({ message: err.message });
    }
}
const createTeacher = async (req: Request, res: Response) => {
    try {
        const result = await teacherServe.createteacher(req.body);
        return res.status(201).json(result);

    } catch (err: any) {
        return res.status(err.status||500).json({ message: err.message });
    }
}
const getTeachers = async (req: Request, res: Response) => {
    try {
        const result = await teacherServe.getTeachers()
        res.status(200).json(result);

    } catch (err: any) {
        return res.status(err.status||500).json({ message: err.message });
    }
}
export { createTeacher, getTeachers, login }