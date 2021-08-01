import React, { useEffect, useState } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import SearchBar from "../layout/SearchBar";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

    const getPokemon = async () => {
      const { data } = await axios.get(API_URL);
      setPokemon(data["results"]);
    };

    getPokemon();
  }, []);

  const filteredPokemon = search.length === 0 ? pokemon : pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container-fluid pt-4 pb-4">
      <SearchBar search={search} setSearch={setSearch} />

      {pokemon ? (
        <div className="row pt-4">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
