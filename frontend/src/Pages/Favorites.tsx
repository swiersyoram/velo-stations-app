import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import StationCardFavorite from "../Components/Layout/StationCardFavorite";
import { station } from "../Models/station";


function Favorites() {

  const favoritesStations = useSelector((state: RootState) => {
    return state.stations.stations.filter((station: station) =>
      state.favorite_stations.value.includes(station.id)
    );
  });

  return (
    <div>
      <h1 className="font-bold text-antwerpred text-3xl">Favorieten</h1>
      <p className="font-normal  text-gray-400 mt-2">
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
