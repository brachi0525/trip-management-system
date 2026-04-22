import { Request, Response } from "express";
import bcrypt from "bcrypt"

const register = async (req: Request, res: Response) => {
    const { fullName, teacherID, password, classNumber } = req.body
    await bcrypt.hash(password, 10)


}