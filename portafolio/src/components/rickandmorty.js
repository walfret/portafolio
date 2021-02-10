import React from "react";
import "./styles/juego.css";

import Loader from "./loader";

class rickandmorty extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <div className="rickAndMorty">
          <h1>Rick y Morty</h1>
          <div className="character-container">
            {this.state.data.results.map((character) => (
              <section key={character.id}>
                <div character={character}>
                  <img
                    className="img-character"
                    src={character.image}
                    alt={character.name}
                  />
                  <p>{character.name}</p>
                </div>
              </section>
            ))}
          </div>
          {this.state.loading && (
            <div>
              <Loader />
            </div>
          )}
          {!this.state.loading && (
            <button
              className="button-social see-more"
              onClick={() => this.fetchCharacters()}
            >
              Ver mas personajes
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default rickandmorty;
