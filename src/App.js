import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; // Hashrouter for GitHub hosting

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

import backgroundImage from "./images/bg.jpg";
import styled from "styled-components";

const Container = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 6rem;
  min-height: 100vh;
  font-family: "VT323", monospace;
  font-size: 1.5rem;
`;

export default function App() {
  return (
    <Router basename="/react-pokedex">
      <Container>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}
