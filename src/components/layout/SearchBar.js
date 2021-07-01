import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 28rem;
  text-indent: 10px;
  outline: none;
`;

const Button = styled.button`
  display: none;
`;

export default function SearchBar(props) {
  return (
    <div className="text-center p-5">
      <Input
        type="search"
        value={props.search}
        placeholder="Search Pokémon"
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </div>
  );
}
