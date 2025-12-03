import React from "react";
import Logo from "./Logo";
import NavLists from "./NavLists";

const NavbarContainer = () => {
  return (
    <div className="navbar">
      <Logo />
      <NavLists />
    </div>
  );
};

export default NavbarContainer;
