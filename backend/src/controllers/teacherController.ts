import { Request, Response } from "express";
import { teacherService } from "../servises/teacherService";

const teacherServe = new teacherService()
const login = async (req: Request, res: Response) => {
    try {
        const loginData = req.body
        const token = await teacherServe.login(req.body)
        if (token)
            res.status(200).json(token);
        else
            res.status(401).json({ });

    } catch (err: any) {
        res.status(500).json({ message: "No permission"});

    }


}
const createTeacher = async (req: Request, res: Response) => {
    try {
        const techeData = req.body
        const result = await teacherServe.createteacher(req.body)
        res.status(201).json(result);
    } catch (err: any) {
        console.log(err.message)
        res.status(500).json({ message: err.message });
    }
}
const getTeachers = async (req: Request, res: Response) => {
    try {

        const result = await teacherServe.getTeachers()
        res.status(200).json(result);

    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}
export { createTeacher, getTeachers, login }