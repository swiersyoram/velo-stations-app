import React from "react";
// import logo from "./public/assets/FullLogo.svg";
type Props = {};

function Header({}: Props) {
  return (
    <header className="fixed top-0 left-0 z-50 bg-red-500">
      <a href="/">
        <img src="/assets/images/FullLogo.svg" alt="" className="w-32 h-full" />
      </a>
    </header>
  );
}

export default Header;
