import { Request, Response } from "express";
import { helperConvert } from "../servises/locationServise";

export const getLocation =  (req: Request, res: Response) => {
    try {
        const result =  helperConvert()
        res.status(201).json(result);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}