import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";

type Props = {
  position: [number, number];
};

function Station({ position }: Props) {
  const map = useMap();
  function onClick() {
    map.flyTo(position);
  }
  return (
    <>
      <Marker position={position} eventHandlers={{ click: onClick }}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}

export default Station;
