import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import StationCard from "../Components/Layout/StationCard";
import { station } from "../Models/station";

type Props = {};

function Search({}: Props) {
  const stations = useSelector((state: RootState) => {
    // console.log(state);

    return state.stations.stations;
  });
  const [search, setsearch] = useState("");
  return (
    <div className="h-full overflow-clip">
      <h1 className="font-bold text-antwerpred text-3xl">Zoek een station</h1>
      <p className="font-normal text-sm text-gray-400">
        Zoek naar een station op basis van nummer of naam
      </p>
      <div className="mt-5 h-full">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-antwerpred w-7 mr-5"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
          <input
            type="text"
            className="border-2 border-antwerpred rounded-md px-2 py-1  grow"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        {/* <button className="bg-antwerpred text-white px-5 py-1 rounded-md">
          Zoeken
        </button> */}
        <hr className="my-5 border-2 rounded-full" />
        <div className="overflow-y-scroll max-h-full">
          {stations
            .filter((station: station) =>
              station.name.match(new RegExp(search, "gi"))
            )
            .map((station: station) => {
              return (
                <StationCard station={station} key={station.id}></StationCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Search;
