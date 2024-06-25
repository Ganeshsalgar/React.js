import React from "react";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
//form react -router -dom to change the only the middle content
import { Outlet } from "react-router-dom";

function Layout() {
    return (
      <>
      <Header/>
      <Outlet />
      <Footer />
      </>
    )
  }

export default Layout;