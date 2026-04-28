import { sendLocation } from "../servises/locationServise";
import { Request, Response } from "express";


export const addLocation = async (req: Request, res: Response) => {
    try {
        const newLocation = req.body;

        sendLocation(newLocation);

        return res.status(201).json({ ok: true });
    } catch (err: any) {
        return res.status(err.status||500).json({ message: err.message });
    }
};