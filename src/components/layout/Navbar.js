import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #000 !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: black;
  background-color: white;
  border: 2px solid gray;
  padding: 0.2rem 0.7rem;
  text-decoration: none;

  &:visited,
  &:link {
    text-decoration: none;
  }

  &:active {
    transform: scale(1.05);
  }
`;

export default function Navbar({ inGame, handleSetInGame }) {
  const isOnPokemonGame = useRouteMatch("/pokemongame");

  return (
    <Nav className="navbar navbar-expand-md navbar-dark fixed-top p-4 w-100">
      <Link to="/" className="navbar-brand align-items-center text-uppercase">
        <span className="h2">Pokédex</span>
      </Link>
      {!isOnPokemonGame && (
        <StyledLink to="/pokemongame" className="rounded text-uppercase">
          Play Game
        </StyledLink>
      )}
    </Nav>
  );
}
