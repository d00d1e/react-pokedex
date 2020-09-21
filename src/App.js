import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Hashrouter for GitHub hosting
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

import backgroundImage from './components/layout/images/background.jpg';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
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

export default App;
