import React from "react";

const CharacterListItem = ({ character }) => {
  return (
    <ul>
      <li>{character.name}</li>
    </ul>
  );
};

export default CharacterListItem;
