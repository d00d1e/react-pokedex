import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";

import PokemonCard from "./PokemonCard";

import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(254, 251, 255, 0.4);
`;

const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Winner = styled.h2`
  font-size: 2.5rem;
  color: green;
  text-transform: uppercase;
`;

const Span = styled.span`
  font-weight: bold;
`;

export default function PokemonGame() {
  // const [pokemon, setPokemon] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [compHand, setCompHand] = useState([]);

  const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  const { data: pokemon = [] } = useQuery("get-pokemon", () =>
    axios.get(API_URL).then(({ data }) => data.results)
  );

  const {
    data: { userPokemon, compPokemon },
  } = useQuery(
    [
      "get-detailed-pokemon",
      [...userHand, ...compHand].map(({ name }) => name),
    ],
    async () => {
      const userPokemon = await Promise.all(
        userHand.map(({ url }) => axios.get(url).then(({ data }) => data))
      );

      const compPokemon = await Promise.all(
        compHand.map(({ url }) => axios.get(url).then(({ data }) => data))
      );

      return {
        userPokemon,
        compPokemon,
      };
    },
    {
      initialData: {
        userPokemon: [],
        compPokemon: [],
      },
    }
  );

  useEffect(() => {
    const generateHand = () => {
      let pokemonHand = [];

      for (let i = 0; i < 3; i++) {
        const randIndex = Math.floor(Math.random() * pokemon.length - 1) + 1;
        const randomPokemon = pokemon[randIndex];

        pokemonHand.push(randomPokemon);
      }

      if (pokemonHand !== undefined) {
        return pokemonHand;
      }
    };

    if (pokemon.length > 0) {
      setUserHand(generateHand());
      setCompHand(generateHand());
    }
  }, [pokemon]);

  const userPokemonExpTotal = userPokemon.reduce(
    (a, pokemon) => a + pokemon.base_experience,
    0
  );

  const compPokemonExpTotal = compPokemon.reduce(
    (a, pokemon) => a + pokemon.base_experience,
    0
  );

  const isWinner = userPokemonExpTotal > compPokemonExpTotal;

  return (
    <div className="container-fluid p-2">
      <StyledLink to="/" className="text-light text-uppercase">
        &lt; Back
      </StyledLink>
      <Container className="text-center rounded">
        <h2 className="text-uppercase display-4 p-1">Your Hand</h2>
        <h3>
          Total Exp: <Span>{userPokemonExpTotal}</Span>
        </h3>
        <Winner>{isWinner ? "Winner!" : ""}</Winner>
        <div className="row d-flex align-items-center justify-content-center">
          {userHand[0] &&
            [...userHand].map((p) => (
              <PokemonCard key={p.name} name={p.name} url={p.url} />
            ))}
        </div>

        <hr />

        <h2 className="text-uppercase display-4 p-1">Computer Hand</h2>
        <h3>
          Total Exp: <Span>{compPokemonExpTotal}</Span>
        </h3>
        <Winner className="">{!isWinner ? "Winner!" : ""}</Winner>
        <div className="row d-flex align-items-center justify-content-center">
          {compHand[0] &&
            [...compHand].map((p) => (
              <PokemonCard key={p.name} name={p.name} url={p.url} />
            ))}
        </div>
      </Container>
    </div>
  );
}
