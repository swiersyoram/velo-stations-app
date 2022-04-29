import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
type Props = {};

let location: LatLngExpression = [51.2197847, 4.4011165];

function Velomap({}: Props) {
  return (
    <div className="bg-blue-500  w-full h-screen " id="map">
      <MapContainer
        center={location}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default Velomap;
