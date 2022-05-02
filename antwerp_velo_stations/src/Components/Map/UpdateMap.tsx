import { createSelector } from "@reduxjs/toolkit";
import { stat } from "fs";
import React, { useEffect, useRef, useState } from "react";
import { useMap, useMapEvent, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { setMap } from "../../features/MapSlice";

type Props = {};

function UpdateMap({}: Props) {
  const map = useMap();

  // const mapvalue = useSelector((state: RootState) => {
  //   return state.map.value;
  // });
  // useEffect(() => {
  //   console.log("changed");
  //   map.flyTo([mapvalue.lat, mapvalue.len]);
  // }, [mapvalue]);

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
