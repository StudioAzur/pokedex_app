import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      console.log(res);
    };
    getPokemon();
  }, []);
  return (
    <div className="App">
      <header className="Pokemon_header">Pokémon</header>
    </div>
  );
}

export default App;
