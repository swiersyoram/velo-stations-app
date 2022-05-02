import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../App/store";
import { opendrawer } from "../../features/MenuSlice";

type Props = {
  children: React.ReactNode;
};

function Menudrawer({ children }: Props) {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => {
    return state.drawer.value.open;
  });
  if (open)
    return (
      <div className="w-80 h-full p-3 pt-7 relative">
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="absolute w-4 top-1 left-2 hover:cursor-pointer fill-gray-500 hover:fill-gray-700"
            onClick={() => dispatch(opendrawer({ value: { open: false } }))}
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </Link>

        <div className="">{children}</div>
      </div>
    );
  else return null;
}

export default Menudrawer;
