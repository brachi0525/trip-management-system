import { sendLocation } from "../servises/locationServise";
import { Request, Response } from "express";

export const addLocation = (req: Request, res: Response) => {
    const newLocation = req.body;

    sendLocation(newLocation);

    res.status(201).json({ ok: true });
};