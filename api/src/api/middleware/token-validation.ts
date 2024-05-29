import { auth } from "firebase-admin";
import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "@api/error/unauthorized-error";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] ?? "";
        if (!token) {
            next(new UnauthorizedError("Token invalido", new Error()));
        }

        await auth().verifyIdToken(token);

        next();
    }
    catch (err: any)
    {
        console.error(err);
        next(new UnauthorizedError("Unauthorized", err));
    }
}