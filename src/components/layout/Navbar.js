import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #000 !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class navbar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-expand-md navbar-dark fixed-top p-4 w-100">
        <Link to="/" className="navbar-brand align-items-center text-uppercase">
          <span className="h2">Pokédex</span>
        </Link>
      </Navbar>
    );
  }
}
