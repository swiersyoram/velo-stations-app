import React, { useEffect } from "react";
import "./App.css";
import Velomap from "./Components/Velomap";
import Menu from "./Components/Menu";
import { Layout } from "./Components/Layout/Layout";
import { Login } from "./Pages/Login";
import { authenticate } from "./slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./App/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  if (!isAuthenticated) return <Login />;

  return (
    <Layout>
      <div className="fixed w-full h-full flex sm:flex-row flex-col">
        <Velomap></Velomap>
        <Menu></Menu>
      </div>
    </Layout>
  );
}

export default App;
