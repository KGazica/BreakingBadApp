import React from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <header className="center">
      <a href="https://www.imdb.com/title/tt0903747/">
        <img src={Logo} alt="Logo" />
      </a>
    </header>
  );
};

export default Navbar;
