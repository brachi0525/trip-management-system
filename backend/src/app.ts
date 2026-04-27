import express, { Request, Response } from "express";
import cors from "cors"
import { connectDB } from "./db/connectDB";
import teacherRoute from "./routes/teacherRoute";
import studentRoute from "./routes/studentRoute";
import locationRoute from "./routes/locationRoute"
import {Socket} from './socket'
import http from "http"
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


connectDB();

const server = http.createServer(app);
Socket(server);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});


app.use('/teacher', teacherRoute);
app.use('/student', studentRoute);
app.use('/map', locationRoute);
