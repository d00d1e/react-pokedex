import React, { Component } from 'react'

// import SearchBar from './SearchBar';
import PokemonList from '../pokemon/PokemonList';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          {/* <SearchBar /> */}
          <PokemonList />
        </div>
      </div>
    )
  }
}