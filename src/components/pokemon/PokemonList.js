import React, { useState } from "react";

import PokemonCard from "./PokemonCard";
import SearchBar from "../layout/SearchBar";

export default function PokemonList({ pokemon }) {
  const [search, setSearch] = useState("");

  const filteredPokemon =
    search.length === 0
      ? pokemon
      : pokemon.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="container pt-4 pb-4">
      <SearchBar search={search} setSearch={setSearch} />

      {pokemon ? (
        <div className="row pt-4">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
