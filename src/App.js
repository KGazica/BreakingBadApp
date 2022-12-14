import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from "./Components/Home";
import Details from "./Components/Details";
import React, { useState, useEffect } from "react";
import Head from "./Components/Head";
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
          <div className="ms-2 me-auto" id="info">
            <img src={character.img} className="picture" alt="character"></img>

            <div className="info">
              <Link target="_blank" to="Details">
                Name: {character.name}
              </Link>
            </div>
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
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="Home" element={<Home />} /> */}
          <Route exact path="Details" element={<Details />} />
        </Routes>
        <div className="container">
          <Head />
          {<CharacterList characters={characters} />}
        </div>
      </Router>
    </div>
  );
}

export default App;
