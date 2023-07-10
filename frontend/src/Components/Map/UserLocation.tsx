import L, { LatLngExpression } from "leaflet";
import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";


function UserLocation() {
  const map = useMap();
  const [userpos, setuserpos] = useState<LatLngExpression>();
  const icon = L.icon({
    iconUrl: "/assets/images/userlocation.svg",
    iconSize: [30, 30],
    popupAnchor: [0, -20],
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      setuserpos([pos.coords.latitude, pos.coords.longitude]);
      map.setView([pos.coords.latitude, pos.coords.longitude]);
    });
    const polling = setInterval(() => {
      navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
        setuserpos([pos.coords.latitude, pos.coords.longitude]);
        // map.setView([pos.coords.latitude, pos.coords.longitude]);
      });
    }, 5000);
    return () => clearInterval(polling);
  }, []);

  function toUserLocation() {
    if (userpos) map.setView(userpos, 18);
  }

  if (!userpos) return null;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-8 h-8 absolute z-[999] right-3 top-3 fill-gray-500"
        onClick={() => {
          toUserLocation();
        }}
      >
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M224,256a32,32,0,1,1,32,32A32,32,0,0,1,224,256ZM256,0a32,32,0,0,1,32,32V42.35A216.05,216.05,0,0,1,469.6,224H480a32,32,0,0,1,0,64H469.6A216,216,0,0,1,288,469.6V480a32,32,0,0,1-64,0V469.6A216.05,216.05,0,0,1,42.35,288H32a32,32,0,0,1,0-64H42.35A216.13,216.13,0,0,1,224,42.35V32A32,32,0,0,1,256,0ZM224,404.6V384a32,32,0,0,1,64,0v20.6A152.08,152.08,0,0,0,404.6,288H384a32,32,0,0,1,0-64h20.6A152.08,152.08,0,0,0,288,107.4V128a32,32,0,0,1-64,0V107.4A152.08,152.08,0,0,0,107.4,224H128a32,32,0,0,1,0,64H107.4A152.08,152.08,0,0,0,224,404.6Z" />
          </g>
        </g>
      </svg>
      <Marker position={userpos} icon={icon}></Marker>
    </>
  );
}

export default UserLocation;
