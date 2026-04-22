import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token)
            if (!token) return res.status(403).json({ error: 'Access denied. No token provided.' });
        const user = jwt.verify(token, "123")
        console.log(user)
        next()

    } catch (error) {
        res.status(403).json({ error: 'Invalid Token' });

    }

}