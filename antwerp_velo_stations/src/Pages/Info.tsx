import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App/store";
import { setMap } from "../features/MapSlice";

type Props = {};

function Info({}: Props) {
  // const [number, setnumber] = useState(0);
  // const dispatch = useDispatch();
  // function test() {
  //   setnumber(number + 1);
  //   console.log(number);

  //   dispatch(setMap({ value: number }));
  // }
  return (
    <div>
      <h1 className="font-bold text-antwerpred text-3xl">Hoe werkt het?</h1>
      <p className=" text-gray-500 mt-2 ">
        Als je vlot door de stad wil, huur je een deelfiets. Antwerpenaren en
        bezoekers, de stad ligt aan je voeten! Hoe werkt het?
      </p>
      <div className="flex mt-10">
        <div>
          <h2 className="font-bold text-antwerpred text-3xl">Stap 1</h2>
          <h3 className="font-bold">Neem een fiets </h3>
          <p className="text-gray-500">Vind een station via de kaart of app.</p>
        </div>
        <img
          src="\assets\images\huur_een-fiets_in_antwerpen.svg"
          alt=""
          className="w-1/3"
        />
      </div>
      <div className="flex mt-10">
        <img
          src="\assets\images\fietsverhuur_in_antwerpen.svg"
          alt=""
          className="w-1/3 h-fit"
        />
        <div className="text-right">
          <h2 className="font-bold text-antwerpred text-3xl">Stap 2</h2>
          <h3 className="font-bold">Geniet van de rit </h3>
          <p className="text-gray-500">
            Voor ritten langer dan 30 minuten betaal je extra.
          </p>
        </div>
      </div>
      <div className="flex mt-10">
        <div>
          <h2 className="font-bold text-antwerpred text-3xl">Stap 3</h2>
          <h3 className="font-bold">Plaats de fiets terug </h3>
          <p className="text-gray-500">
            Dat kan in elk station. Na 5 minuten kun je opnieuw een fiets lenen.
          </p>
        </div>
        <img
          src="\assets\images\deelfietsen_in_antwerpen.svg"
          alt=""
          className="w-1/3"
        />
      </div>
    </div>
  );
}

export default Info;
