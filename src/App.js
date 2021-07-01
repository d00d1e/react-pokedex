import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; // Hashrouter for GitHub hosting

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

import backgroundImage from "./components/layout/images/bg.jpg";
import "./App.css";

export default function App() {
  return (
    <Router basename="/react-pokedex">
      <div
        className="App"
        style={{
          background: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
