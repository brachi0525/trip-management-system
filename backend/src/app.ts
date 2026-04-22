import express, { Request, Response } from "express";
import cors from "cors"
import { connectDB } from "./db/connectDB";
const app = express();
app.use(cors);
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

const PORT = 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Listening on http://localhost:${PORT}`);
});