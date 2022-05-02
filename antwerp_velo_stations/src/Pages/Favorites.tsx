import { map } from "leaflet";
import React, { useEffect } from "react";
import { Root } from "react-dom/client";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import StationCardFavorite from "../Components/Layout/StationCardFavorite";
import { station } from "../Models/station";

type Props = {};

function Favorites({}: Props) {
  // const map = useMap();
  // map.flyTo([51.21782, 4.42065]);

  const favoritesStations = useSelector((state: RootState) => {
    // console.log(state.favorite_stations.value);
    return state.stations.stations.filter((station: station) =>
      state.favorite_stations.value.includes(station.id)
    );
  });

  useEffect(() => {}, []);
  return (
    <div>
      <h1 className="font-bold text-antwerpred text-3xl">Favorieten</h1>
      <p className="font-normal text-sm text-gray-400">
        Hieronder vind je de stations die jij hebt opgeslagen als favoriet.
      </p>
      <div className="mt-5">
        {favoritesStations.map((station: station) => {
          return (
            <StationCardFavorite
              station={station}
              key={station.id}
            ></StationCardFavorite>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
