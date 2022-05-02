import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Router, Routes } from "react-router-dom";
import { RootState } from "../../App/store";
import { opendrawer } from "../../features/MenuSlice";
import { sidebarexternallinks, sidebarroutes } from "../../Lib/SidebarRoutes";
import "../../Styles/Sidebar.css";
type Props = {};

function Sidebar({}: Props) {
  const routes = sidebarroutes;
  const externallinks = sidebarexternallinks;

  const dispatch = useDispatch();
  return (
    <div className="h-full w-16 flex flex-col justify-between">
      <div className="grid grid-cols-1 grid-rows-3 navwrapper ">
        {routes.map((route) => (
          <NavLink
            to={route.link}
            key={route.link}
            className="flex hover:bg-veloorange duration-500  hover:cursor-pointer routewrapper "
            onClick={() => {
              dispatch(opendrawer({ value: { open: true } }));
            }}
          >
            <div className=" flex  m-auto">
              <div className=" w-fit h-fit m-auto  py-2 ">{route.icon}</div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="grid grid-cols-1 grid-rows-2  ">
        {externallinks.map((link) => (
          <div className="  h-fit m-auto w-10  py-3 " key={link.url}>
            <a href={link.url} target="_blank">
              <img src={link.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
