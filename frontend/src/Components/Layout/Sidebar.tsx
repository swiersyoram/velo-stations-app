import React from "react";
import { useDispatch} from "react-redux";
import {  NavLink,} from "react-router-dom";
import { opendrawer } from "../../features/MenuSlice";
import { sidebarexternallinks, sidebarroutes } from "../../Lib/SidebarRoutes";
import "../../Styles/Sidebar.css";

function Sidebar() {
  const routes = sidebarroutes;
  const externallinks = sidebarexternallinks;

  const dispatch = useDispatch();
  return (
    <div className="h-fit sm:h-full sm:w-20 lg:w-16 flex flex-col  justify-between border-t-4 border-gray-100">
      <div className="grid grid-rows-1 grid-cols-3 sm:grid-cols-1 sm:grid-rows-3 navwrapper ">
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

      <div className="grid grid-cols-1 grid-rows-2 hidden  sm:grid">
        {externallinks.map((link) => (
          <div className="  h-fit m-auto w-10  py-3 " key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">
              <img src={link.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
