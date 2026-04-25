import { MapContainer, TileLayer,Marker,Popup, Tooltip } from "react-leaflet";
import React, { useContext, useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css";
import "./map.css"
import { TeacherContext } from "../../context/teacher";
export const Map = () => {
    const {getLocation}= useContext(TeacherContext);
    const [locationData, setLocationData] =useState([]);
     useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await getLocation();
            setLocationData(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);
  
    
    return (

        <MapContainer center={[31.9325, 35.0445]} zoom={10}  >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {
                locationData.map(marker => (
                    <Marker position={marker.Coordinates} >
                        <Popup ><h1>{marker.id}</h1></Popup>
                                <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{marker.id}</Tooltip>

                        </Marker>
                ))
            }
        </MapContainer>

    )
}

