import { studentsLocations, io } from "../socket";
import { dms } from "../../../types/dms";
import { location } from "../../../types/location";

const convertDMS = (dms: dms) => {
  return dms.Degrees + dms.Minutes / 60 + dms.Seconds / 3600;
};
export const sendLocation = (loc: location) => {
  const converted = {
    id: loc.id,
    Coordinates: [
      convertDMS(loc.Coordinates.Latitude),
      convertDMS(loc.Coordinates.Longitude),
    ],
    time: loc.Time,
  };

  const prevLocation = studentsLocations[loc.id];

  if (prevLocation &&
     prevLocation.Coordinates[0] === converted.Coordinates[0] 
     && prevLocation.Coordinates[1] === converted.Coordinates[1]) {
    return;
  }

  studentsLocations[loc.id] = converted;
  io.emit("receiveLocation", converted);
};