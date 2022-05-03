import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../App/store";
import { opendrawer } from "../../features/MenuSlice";

type Props = {
  children: React.ReactNode;
};

function Menudrawer({ children }: Props) {
  return (
    <div className="h-full p-5 sm:w-96 overflow-y-scroll sm:overflow-hidden border-t-[3px] border-black sm:border-0  ">
      {children}
    </div>
  );
}

export default Menudrawer;
