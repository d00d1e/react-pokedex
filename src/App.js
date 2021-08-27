import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import styled from "styled-components";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonGame from "./components/pokemon/PokemonGame";

import backgroundImage from "./images/bg.jpg";

const Container = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-repeat: repeat;

  padding-top: 6rem;
  min-height: 100vh;
  min-width: 100vw;
  font-family: "VT323", monospace;
  font-size: 1.5rem;
`;

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router basename="/react-pokedex">
        <Container>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route exact path="/pokemongame" component={PokemonGame} />
            </Switch>
          </div>
        </Container>
      </Router>
    </QueryClientProvider>
  );
}
