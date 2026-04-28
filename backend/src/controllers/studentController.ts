import { Request, Response } from "express";
import { studentService } from "../servises/studentService";

const studentServe = new studentService()

const createStudent = async (req: Request, res: Response) => {
    try {
        const techeData = req.body
        const result = await studentServe.createstudent(techeData)
        res.status(201).json(result);
    } catch (err: any) {
        return res.status(err.status||500).json({ message: err.message });
    }
}
const getStudents = async (req: Request, res: Response) => {
    try {
        const result = await studentServe.getstudents()
        res.status(200).json(result);
    } catch (err: any) {
        return res.status(err.status||500).json({ message: err.message });
    }
}
export{createStudent,getStudents}