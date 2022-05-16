import axios, { AxiosPromise } from "axios";
import React from "react";

const apiRoute: string = "http://localhost:8000/stations";
const AuthStr: string =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTI2ODkyODUsImV4cCI6MTY4NDIyNTI4NX0.4VvnqIb5GGO686iWX4PY56v4v-6I9Fr4Spu-hw2hIaw";
export function GetAllStations() {
  // console.log("with new string");

  return axios
    .get(apiRoute, { headers: { Authorization: AuthStr } })
    .then(({ data }) => {
      // console.log(res);
      return data.network.stations;
    });
}
