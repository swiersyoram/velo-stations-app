import React, {ReactNode} from "react";
import Footer from "./Footer";
import { LegendCard } from "./LegendCard";
import {Header} from "./Header";

interface IProps {
  children?: ReactNode;
}

export const Layout = ({ children }: IProps) =>
    <>
      <Header />
      <LegendCard />
      <main>{children}</main>
      <Footer />
    </>