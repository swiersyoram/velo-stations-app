import axios, { AxiosPromise } from "axios";
import React from "react";

const apiRoute: string = "http://api.citybik.es/v2/networks/velo-antwerpen";
export function GetAllStations() {
  return axios.get(apiRoute).then(({ data }) => {
    // console.log(res);
    return data.network.stations;
  });
}
