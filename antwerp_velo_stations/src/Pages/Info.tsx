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
  return <div>Info</div>;
}

export default Info;
