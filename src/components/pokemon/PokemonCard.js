import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import spinner from "../../images/spinner.gif";

const Sprite = styled.img`
  width: 5.5em;
  height: 5.5em;
`;

const Card = styled.div`
  /* opacity: 0.95; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];

    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    const imageUrl = `${POKE_API}${padToThree(pokemonIndex)}.png`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex,
    });
  }

  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="card">
            <h5 className="card-header">#{this.state.pokemonIndex}</h5>
            {this.state.imageLoading ? (
              <img src={spinner} alt="spinner" onLoad={() => this.setState({ imageLoading: false })} style={{ width: "5em", height: "5em" }} className="card-img-top rounded mx-auto d-block mt-2" />
            ) : (
              <Sprite
                className="card-img-top rounded mx-auto mt-2"
                src={this.state.imageUrl}
                onLoad={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ toManyRequests: true })}
                style={this.state.toManyRequests ? { display: "none" } : this.state.imageLoading ? null : { display: "block" }}
              ></Sprite>
            )}

            <div className="class-body mx-auto">
              <h4 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </h4>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}
