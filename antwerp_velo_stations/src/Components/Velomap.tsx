import axios from "axios";
import { LatLngExpression, Map, map } from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import VeloDataService from "../Api/VeloDataService";
import { station } from "../Models/station";

import Station from "./Map/Station";
import UpdateMap from "./Map/UpdateMap";

type Props = {};

let location: LatLngExpression = [51.2197847, 4.4011165];
function Velomap({}: Props) {
  useEffect(() => {
    VeloDataService.GetAllStations().then((res) => {
      setstations(res);
      console.log(res);
    });
  }, []);
  const [stations, setstations] = useState([]);
  const [position, setPosition] = useState(null);

  return (
    <div className="bg-blue-500  w-full h-screen " id="map">
      <MapContainer
        preferCanvas={true}
        center={location}
        zoom={18}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap />
        {stations.map((station: station) => {
          // console.log(station);

          return (
            <Station station={station} key={station.id}></Station>
            // <Marker position={[station.latitude, station.longitude]}>
            //   <Popup>
            //     A pretty CSS3 popup. <br /> Easily customizable.
            //   </Popup>
            // </Marker>
          );
        })}
      </MapContainer>{" "}
    </div>
  );
}

export default Velomap;
