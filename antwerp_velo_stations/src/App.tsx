import React from "react";
import logo from "./logo.svg";
import Layout from "./Components/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Velomap from "./Components/Velomap";
import Menu from "./Menu/Menu";
function App() {
  return (
    <Layout>
      <div className="fixed w-full flex">
        <Velomap></Velomap>
        <Menu></Menu>
      </div>
    </Layout>
  );
}

export default App;
