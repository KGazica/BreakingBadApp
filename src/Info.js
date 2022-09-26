import { useLocation } from "react-router-dom";
import React from "react";

const CharacterInfo = () => {
  const location = useLocation();
  const character = location.state.data;

  console.log(character);

  return <div>{character}</div>;
};

export default CharacterInfo;
