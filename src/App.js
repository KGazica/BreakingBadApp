import React, { useState, useEffect } from "react";
import CharacterList from "./Components/CharacterList";
import Navbar from "./Components/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);

  const callBreakingBadAPI = async () => {
    const url = `https://www.breakingbadapi.com/api/characters?name`;
    const resp = await fetch(url);
    const data = await resp.json();
    setCharacters(data);
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
