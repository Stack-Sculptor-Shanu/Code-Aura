import React from "react";
import Lottie from "lottie-react";
import devLogo from "../../../public/Nav/dev.json";

const Logo = () => {
  return (
    <div className="logo">
      <Lottie animationData={devLogo} className="logo-animation" />
      <span>Code Aura</span>
    </div>
  );
};

export default Logo;
