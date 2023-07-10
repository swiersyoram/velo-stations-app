import React from "react";
import Sidebar from "./Layout/Sidebar";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { InfoPage } from "../Pages/Info";
import { Search } from "../Pages/Search";
import Favorites from "../Pages/Favorites";
import Menudrawer from "../Components/Layout/Menudrawer";

function Menu() {
  return (
    <Router>
      <Menudrawer>
        <Routes>
          <Route path="/" element={<Navigate to="/info" replace />} />
          <Route path="/info" element={<InfoPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </Menudrawer>
      <Sidebar></Sidebar>
    </Router>
  );
}

export default Menu;
