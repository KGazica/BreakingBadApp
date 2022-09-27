import React from "react";
import Logo from "../images/logo.png";

const Head = () => {
  return (
    <nav className="center">
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
    </nav>
  );
};

export default Head;
