import "leaflet/dist/leaflet.css";
import "./map.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { io } from "socket.io-client";


export const Map = () => {
    const [locations, setLocations] = useState([]);


    useEffect(() => {
        const socket = io("http://localhost:3000");
        const token = localStorage.getItem("token");

        socket.emit("joinClass", token);
        socket.on("allLocations", (data) => {
            setLocations(data);
        });
        socket.on("receiveLocation", (newLocation) => {
            setLocations((prev) => {
                const filtered = prev.filter((x) => x.id !== newLocation.id);
                return [...filtered, newLocation];
            });
        });

        return () => {
            socket.disconnect();
        };
    }, []);

   
    return (
        <div>
            <MapContainer center={[31.7683, 35.2137]} zoom={10}>
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {locations.map((marker) => (
                    <Marker key={marker.id} position={marker.Coordinates}>
                        <Popup>{marker.id}</Popup>
                        <Tooltip permanent>{marker.id}</Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};



