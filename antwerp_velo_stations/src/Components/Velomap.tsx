import { stat } from "fs";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App/store";
import { fetchStations } from "../features/StationSlice";
// import VeloDataService from "../Api/VeloDataService";
import { station } from "../Models/station";

import StationPopup from "./Layout/StationPopup";
import UpdateMap from "./Map/UpdateMap";

type Props = {};

let location: LatLngExpression = [51.2197847, 4.4011165];
function Velomap({}: Props) {
  // const stations: station[] = [];
  const dispatch = useDispatch<AppDispatch>();
  const stations = useSelector((state: RootState) => {
    // console.log(state.stations);
    return state.stations.stations;
  });
  useEffect(() => {
    dispatch(fetchStations());
    // console.log("fetch");

    const polling = setInterval(() => {
      // console.log("refresh");

      dispatch(fetchStations());
    }, 10000);
    return () => clearInterval(polling);
  }, [dispatch]);

  return (
    <div className="w-full h-full ">
      <MapContainer
        preferCanvas={true}
        center={location}
        zoom={18}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap />
        {stations.map((station: station) => {
          return (
            <StationPopup station={station} key={station.id}></StationPopup>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Velomap;
