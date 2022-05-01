import React from "react";
import { useMapEvent, useMapEvents } from "react-leaflet";

type Props = {};

function UpdateMap({}: Props) {
  const map = useMapEvents({
    click: () => {
      console.log("click");
    },
    dragend: () => {
      console.log("drag");
    },
  });
  return null;
}

export default UpdateMap;
