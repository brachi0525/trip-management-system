import { Server } from "socket.io";
import http from "http";
import jwt from "jsonwebtoken";

export let io: Server;
export const studentsLocations: Record<number, any> = {};

export const Socket = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {


    socket.on("joinClass", (token: string) => {

      const JWT_SECRET = process.env.JWT_SECRET;
      const user = jwt.verify(token, JWT_SECRET!) as any
      if (user.role === "admin") {
        socket.join("admin");
        socket.emit("allLocations", Object.values(studentsLocations));
        return;
      }
      const classNumber = user.classNumber;
      socket.join(classNumber);
      const classLocations = Object.values(studentsLocations)
        .filter((loc: any) => loc.classNumber === classNumber);
      socket.emit("allLocations", classLocations);

    });

  });
};
