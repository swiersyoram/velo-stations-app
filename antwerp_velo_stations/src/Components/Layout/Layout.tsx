import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import InfoCard from "./LegendCard";
type Props = {
  children?: any;
};

function layout({ children }: Props) {
  return (
    <>
      <Header></Header>
      <InfoCard></InfoCard>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default layout;
