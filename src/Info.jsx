import { useLocation } from "react-router-dom";
import React from "react";


  const CharacterInfo = () => {
    const location = useLocation();
    const character = location.state?.data;
  
    return <div>{character.name}</div>;
  };


export default CharacterInfo;
