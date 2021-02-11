import React from "react";
import { Link } from "react-router-dom";

import "./styles/home.css";
import logo from "../logo.svg";
import face from "./images/facebook-ori.svg";
import insta from "./images/instagram-ori.svg";
import whats from "./images/whatsapp.svg";
import git from "../github-negro.svg";
import github from "./images/github.svg";

class home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-home">
          <div className="links">
            <figure>
              <img className="App-logo spin" src={logo} alt="" />
              <p>CR</p>
            </figure>
            <section>
              <nav>
                <Link to="/api">
                  <div>
                    <label>Juego con api</label>
                  </div>
                </Link>
              </nav>
              <nav>
                <Link to="/me">
                  <div>
                    <label>Mas Acerca De Mi</label>
                  </div>
                </Link>
              </nav>
              <nav>
                <Link to="/avatar">
                  <div>Crear Tu Propio Avatar</div>
                </Link>
              </nav>
            </section>
          </div>
          <div className="welcome">
            <h2>Bienvenido a mi portafolio</h2>
            <h2>
              Mi nombre es Christian, <br /> soy desarrollador frontend
            </h2>
          </div>
          <div className="social">
            <div className="redes">
              <p>Visita mis redes sociales:</p>
              <a href="https://www.facebook.com/walfret.bravo">
                <img src={face} alt="" />
              </a>
              <a href="https://www.instagram.com/walfret/">
                <img src={insta} alt="" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0">
                <img src={whats} alt="" />
              </a>
              <a href="https://github.com/walfret?tab=repositories">
                <img src={git} alt="" />
              </a>
            </div>
            <p>
              El codigo de esta pagina esta aqui :
              <a href="https://github.com/walfret/portafolio/tree/master/portafolio">
                <img src={github} alt="" width={40} />
              </a>
            </p>
            <p>Pagina creada con React.js</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default home;
