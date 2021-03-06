import React from "react";
import { Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import logo from "../logo.svg";

import RickandMorty from "./rickandmorty";

class Api extends React.Component {
  state = {
    show: false,
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div id="inicio" className="header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="cr">CR</p>
          </div>
          <div
            className="menu"
            style={{ bottom: this.state.show === true ? 0 : "-250vw" }}
          >
            <nav>
              <Link className="nav-words" to="/">
                Home
              </Link>
              <Link className="nav-words" to="/me">
                Mas acerca
              </Link>
            </nav>
          </div>
          <div>
            <a
              href="https://www.facebook.com/walfret.bravo"
              className="social-link facebook"
            ></a>
            <a
              href="https://www.instagram.com/walfret/"
              className="social-link instagram"
            ></a>
            <a
              href="https://github.com/walfret?tab=repositories"
              className="social-link github"
            ></a>
            <a
              href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0"
              className="social-link whats"
            ></a>
            <i
              id="burger-menu"
              className="burger-button"
              onClick={this.handleClick}
            ></i>
          </div>
        </div>
        <Provider store={store}>
          <div>
            <p>Pagina en proceso...</p>
          </div>
        </Provider>
        <RickandMorty />
        <div className="create-container">
          <Link to="/avatar">
            <div className="create-avatar">Crea tu avatar</div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Api;
