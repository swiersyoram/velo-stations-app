import { stat } from "fs";
import React, { useEffect, useRef, useState } from "react";
import { useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { setMap } from "../../features/MapSlice";

type Props = {};

function UpdateMap({}: Props) {
  const map = useMap();
  // useSelector((state: RootState) => {
  //   console.log(state);
  //   if (state.map) map.flyTo([50, state.map.value]);
  //   return state.map.value;
  // });

  // map.flyTo([50, 4]);
  // const map = useMapEvents({
  //   click: () => {
  //     console.log("click");
  //   },
  //   dragend: () => {
  //     console.log("drag");
  //   },
  // });
  return null;
}

export default UpdateMap;
