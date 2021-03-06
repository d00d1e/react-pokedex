import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

// import styled from 'styled-components';

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top p-4">
        <Link
          to="/"
          className="navbar-brand col-sm-3 mr-0 align-items-center text-uppercase"
        >
          <span className="h2"> Pokédex</span>
        </Link>
      </nav>
    );
  }
}
