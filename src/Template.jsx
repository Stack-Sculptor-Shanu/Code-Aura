import React from "react";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div>
      <NavbarContainer />
      <Outlet />
    </div>
  );
};

export default Template;
