import React from "react";

export const LegendCard = () => {
  const veloIcons = [
    {
      icon: "/assets/images/markeravailable.svg",
      text: "Station met beschikbare fietsen",
    },
    {
      icon: "/assets/images/markerempty.svg",
      text: "Leeg station",
    },
    {
      icon: "/assets/images/markerfull.svg",
      text: "Vol station",
    },
    {
      icon: "/assets/images/markerbroken.svg",
      text: "Station buiten dienst",
    },
  ];

  return (
    <div className="absolute left-5  z-10 top-0 bottom-0  my-auto h-fit  text-3xl font-bold  bg-neutral-50 p-5 bg-opacity-80 shadow-sm hidden sm:block">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-10 fill-blue-600 mr-5"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
        </svg>
        <h2 className="text-blue-600">Legende</h2>
      </div>
      <p className="text-neutral-500 text-sm mt-2 mb-5">
        Zo kan je gemakkelijk een Velo fiets <br></br> nemen of terugplaatsen.
      </p>
      {veloIcons.map((item) => (
        <div className="flex items-center mb-3" key={item.icon}>
          <img src={item.icon} alt="" className="w-6 mr-3" />
          <span className="text-neutral-700 text-sm mt-2">{item.text}</span>
        </div>
      ))}
    </div>
  );
};
