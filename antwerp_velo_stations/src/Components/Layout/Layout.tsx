import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
type Props = {
  children?: any;
};

function layout({ children }: Props) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default layout;
