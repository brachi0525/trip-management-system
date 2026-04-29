import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;

        const token = req.headers.authorization?.split(' ')[1];
        if (!token)
            return res.status(403).json({ error: 'No token provided' });
        const user = jwt.verify(token, JWT_SECRET!);
        (req as any).user = user
        next()

    } catch (error) {
        res.status(403).json({ error: 'Invalid Token' });

    }

}