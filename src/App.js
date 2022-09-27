import React, { useState, useEffect } from "react";
import Head from "./Components/Head";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const callBreakingBadAPI = async () => {
    const url = `https://www.breakingbadapi.com/api/characters?name`;
    const resp = await fetch(url);
    const data = await resp.json();
    setCharacters(data);
  };

  const CharacterListItem = ({ character }) => {
    return (
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto" id="info">
            <a href="https://breakingbad.fandom.com/wiki/Category:Breaking_Bad_Characters">
              <img
                src={character.img}
                className="picture"
                alt="character"
              ></img>
            </a>
            <div className="info">
              <Link target="_blank" to="./Info" state={{ data: character }}>
                Name: {character.name}
              </Link>
            </div>
            <div className="info">Birthday: {character.birthday}</div>
            <div className="info">Nickname: {character.nickname}</div>
            <div className="info">Actor: {character.portrayed}</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  };

  const CharacterList = ({ characters }) => {
    return (
      <section>
        {characters.map((character) => (
          <CharacterListItem character={character} key={character.char_id} />
        ))}
      </section>
    );
  };

  useEffect(() => {
    callBreakingBadAPI();
  }, []);

  return (
    <div className="container">
      <Head />
      {<CharacterList characters={characters} />}
    </div>
  );
}

export default App;
