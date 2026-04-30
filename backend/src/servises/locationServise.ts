import { studentsLocations, io } from "../socket";
import { dms } from "../../../types/dms";
import { location } from "../../../types/location";
import studentRepository from "../repositories/studentRepository";

const studentRepo = new studentRepository();

const convertDMS = (dms: dms) => {
  return dms.Degrees + dms.Minutes / 60 + dms.Seconds / 3600;
};

export const sendLocation = async (locations: location[]) => {
  for (const item of locations) {
    let classNumber;

    const prevLocation = studentsLocations[item.id];

    if (prevLocation) {
      classNumber = prevLocation.classNumber;
    } else {
      const student = await studentRepo.getByID(String(item.id));

      if (!student) {
        continue;
      }

      classNumber = student.classNumber;
    }

    const converted = {
      id: item.id,
      classNumber,
      Coordinates: [
        convertDMS(item.Coordinates.Latitude),
        convertDMS(item.Coordinates.Longitude),
      ],
      time: item.Time,
    };

    const changed =
      !prevLocation ||
      prevLocation.Coordinates[0] !== converted.Coordinates[0] ||
      prevLocation.Coordinates[1] !== converted.Coordinates[1];

    if (changed) {
      studentsLocations[item.id] = converted;


      io.to(classNumber).emit("receiveLocation", converted);
      io.to("admin").emit("receiveLocation", converted);
    }
  }
};