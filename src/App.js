import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ListGroup from "react-bootstrap/ListGroup";

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
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Name:{" "}
              <a href="https://breakingbad.fandom.com/wiki/Category:Breaking_Bad_Characters">
                {character.name}
              </a>
            </div>
            Birthday: {character.birthday}
            <div>Nickname: {character.nickname}</div>
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
      <Navbar />
      {<CharacterList characters={characters} />}
    </div>
  );
}

export default App;
