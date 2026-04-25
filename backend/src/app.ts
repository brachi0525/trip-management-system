import express, { Request, Response } from "express";
import cors from "cors"
import { connectDB } from "./db/connectDB";
import teacherRoute from "./routes/teacherRoute";
import studentRoute  from "./routes/studentRoute";
import locationRoute from "./routes/locationRoute"
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


    connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});


app.use('/teacher',teacherRoute);
app.use('/student',studentRoute);
app.use('/map',locationRoute);
