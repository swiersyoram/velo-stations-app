import { LatLngExpression } from "leaflet";
import React, { useEffect} from "react";
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../App/store";
import { station } from "../Models/station";

import StationPopup from "./Layout/StationPopup";
import UserLocation from "./Map/UserLocation";
import {fetchStations} from "../features/StationSlice";

type Props = {};

let location: LatLngExpression = [51.2197847, 4.4011165];
function Velomap({}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const stations = useSelector((state: RootState) => {
    return state.stations.stations;
  });

  useEffect(() => {
      dispatch(fetchStations());
  }, []);

  useEffect(() => {
    const polling = setInterval(() => {
      dispatch(fetchStations());
    }, 10000);

    return () => clearInterval(polling);
  }, [dispatch]);

  return (
    <div className="w-full h-full ">
      <MapContainer
        closePopupOnClick={true}
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
        <UserLocation></UserLocation>
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
