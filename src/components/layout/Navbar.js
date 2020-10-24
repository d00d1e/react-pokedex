import React, { Component } from 'react';

// import styled from 'styled-components';

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a href="/" className="navbar-brand col-sm-3 mr-0 align-items-center text-uppercase">
          &nbsp; Pokédex
        </a>
      </nav>
    )
  }
}
