import { Server } from "socket.io";
import http from "http";

export let io: Server;

export const studentsLocations: Record<number, any> = {};

export const Socket = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.emit("allLocations", Object.values(studentsLocations));
  });
};

