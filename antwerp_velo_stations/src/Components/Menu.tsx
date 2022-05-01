import React from "react";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "../Pages/Info";
import Search from "../Pages/Search";
import Favorites from "../Pages/Favorites";
type Props = {};

function Menu({}: Props) {
  return (
    <>
      <Router>
        <div className="w-72">
          <Routes>
            <Route path="/info" element={<Info></Info>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          </Routes>
        </div>
        <Sidebar></Sidebar>
      </Router>
    </>
  );
}

export default Menu;
