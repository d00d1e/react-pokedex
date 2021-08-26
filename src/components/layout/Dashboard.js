import React from "react";

import axios from "axios";
import { useQuery } from "react-query";
import PokemonList from "../pokemon/PokemonList";

export default function Dashboard() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  const { data: pokemon = [] } = useQuery("get-pokemon", () =>
    axios.get(API_URL).then(({ data }) => data.results)
  );

  return (
    <div className="row">
      <div className="col">
        <PokemonList pokemon={pokemon} />
      </div>
    </div>
  );
}
