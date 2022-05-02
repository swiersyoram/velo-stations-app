import React from "react";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "../Pages/Info";
import Search from "../Pages/Search";
import Favorites from "../Pages/Favorites";
import Menudrawer from "../Components/Layout/Menudrawer";
type Props = {};

function Menu({}: Props) {
  return (
    <>
      <Router>
        <Menudrawer>
          <Routes>
            <Route path="/" element={null}></Route>
            <Route path="/info" element={<Info></Info>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          </Routes>
        </Menudrawer>
        <Sidebar></Sidebar>
      </Router>
    </>
  );
}

export default Menu;
