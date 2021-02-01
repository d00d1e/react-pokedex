import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 28rem;
  text-indent: 10px;
`;

export default class SearchBar extends Component {


  render() {
    return (
      <div className="text-center p-4 pb-5">
        <Input
          type="search"
          // value={value}
          placeholder="Search Pokémon"
          // onChange={}
        />
      </div>
    );
  }
}