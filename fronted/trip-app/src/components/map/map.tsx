import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./map.css";
import { io } from "socket.io-client";

export const Map = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const socket = io("http://localhost:3000");

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
        <MapContainer center={[31.9325, 35.0445]} zoom={7}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {locations.map((marker) => (
                <Marker key={marker.id} position={marker.Coordinates}>
                    <Popup>{marker.id}</Popup>
                    <Tooltip permanent>{marker.id}</Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};






