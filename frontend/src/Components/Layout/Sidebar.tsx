import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { opendrawer } from "../../slices/MenuSlice";
import { sidebarexternallinks, sidebarroutes } from "../../Lib/SidebarRoutes";
import "../../Styles/Sidebar.css";
import { logout } from "../../slices/UserSlice";
import { AppDispatch } from "../../App/store";

function Sidebar() {
  const routes = sidebarroutes;
  const externallinks = sidebarexternallinks;

  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
  };

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={25}
          className={"m-auto py-2 fill-antwerpred cursor-pointer "}
          onClick={onLogout}
        >
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
        </svg>
      </div>
    </div>
  );
}

export default Sidebar;
