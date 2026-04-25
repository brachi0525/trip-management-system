import { dms } from '../../../types/dms'
import { location } from '../../../types/location'

const markers: location[] = [
  {
    id: 1,
    Coordinates: {
      Latitude: { Degrees: 31, Minutes: 55, Seconds: 57 },
      Longitude: { Degrees: 35, Minutes: 2, Seconds: 40 }
    },
    Time: "2026-04-25T12:00:00"
  },
  {
    id: 2,
    Coordinates: {
      Latitude: { Degrees: 31, Minutes: 55, Seconds: 56 },
      Longitude: { Degrees: 35, Minutes: 2, Seconds: 40 }
    },
    Time: "2026-04-25T12:05:00"
  },
  {
    id: 3,
    Coordinates: {
      Latitude: { Degrees: 31, Minutes: 55, Seconds: 56 },
      Longitude: { Degrees: 35, Minutes: 2, Seconds: 39 }
    },
    Time: "2026-04-25T12:10:00"
  },
  {
    id: 4,
    Coordinates: {
      Latitude: { Degrees: 31, Minutes: 56, Seconds: 10 },
      Longitude: { Degrees: 35, Minutes: 2, Seconds: 36 }
    },
    Time: "2026-04-25T12:15:00"
  },
  {
    id: 5,
    Coordinates: {
      Latitude: { Degrees: 31, Minutes: 55, Seconds: 47 },
      Longitude: { Degrees: 35, Minutes: 2, Seconds: 26 }
    },
    Time: "2026-04-25T12:20:00"
  },
  {
    id: 6,
    Coordinates: {
      Latitude: { Degrees: 31, Minutes: 56, Seconds: 15 },
      Longitude: { Degrees: 35, Minutes: 2, Seconds: 46 }
    },
    Time: "2026-04-25T12:25:00"
  }
];
const convertDMS = (dms: dms) => {
    const answer = (dms.Degrees) + (dms.Minutes) / 60 + (dms.Seconds) / 3600;
    return answer

}
export const helperConvert = () => {
    const convertedLocations = markers.map((loc) => {
        const lon = convertDMS(loc.Coordinates.Longitude)
        const lat = convertDMS(loc.Coordinates.Latitude)
        return{
            id: loc.id,
            Coordinates: [lat, lon],
            time:loc.Time
        }
    })
console.log(convertedLocations);
return convertedLocations


}