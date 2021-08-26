import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import spinner from "../../images/spinner.gif";

const Sprite = styled.img`
  width: 5.5em;
  height: 5.5em;
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function PokemonCard({ name, url }) {
  const [imageUrl, setImageUrl] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  const [imageLoading, setImageLoading] = useState(true);
  const [tooManyRequests, setTooManyRequests] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const index = url.split("/")[url.split("/").length - 2];

    let padToThree = (number) =>
      number <= 999 ? `00${number}`.slice(-3) : number;
    const POKE_API =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    const imageUrl = `${POKE_API}${padToThree(index)}.png`;

    setImageUrl(imageUrl);
    setPokemonIndex(index);

    const getPokemonData = async () => {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;

      const { data } = await axios.get(pokemonUrl);
      setPokemonData(data);
    };

    getPokemonData();
  }, [pokemonIndex, url]);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
      <StyledLink to={`pokemon/${pokemonIndex}`}>
        <Card className="card">
          <h5 className="card-header">#{pokemonIndex}</h5>
          {imageLoading ? (
            <img
              src={spinner}
              alt="spinner"
              onLoad={() => setImageLoading(false)}
              style={{ width: "5em", height: "5em" }}
              className="card-img-top rounded mx-auto d-block mt-2"
            />
          ) : (
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              src={imageUrl}
              onLoad={() => setImageLoading(false)}
              onError={() => setTooManyRequests(true)}
              style={
                tooManyRequests
                  ? { display: "none" }
                  : imageLoading
                  ? null
                  : { display: "block" }
              }
            />
          )}
          <div className="class-body mx-auto">
            <h4 className="card-title">
              {name
                .toLowerCase()
                .split(" ")
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")}
            </h4>
            {location.pathname === "/pokemongame" && (
              <p className=" card-text text-muted pb-3">
                Exp:{" "}
                <span className="text-info">{pokemonData.base_experience}</span>
              </p>
            )}
          </div>
        </Card>
      </StyledLink>
    </div>
  );
}
