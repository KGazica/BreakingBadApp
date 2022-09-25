import React from "react";
import Logo from "../images/logo.png";

const Head = () => {
  return (
    <nav className="center">
      <a href="https://www.imdb.com/title/tt0903747/">
        <img src={Logo} alt="Logo" />
      </a>
    </nav>
  );
};

export default Head;
