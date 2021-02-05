import React from "react";
import { Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import "../index.css";

import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Technologies from "./technologies";
import Contact from "./contact";
import Footer from "./footer";

class layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Header />
          <Hero />
          <div className="create-container">
            <Link to="/me/avatar">
              <div className="create-avatar">Crea tu avatar</div>
            </Link>
          </div>
          <About />
          <Technologies />
          <Contact />
          <Footer />
        </Provider>
      </React.Fragment>
    );
  }
}

export default layout;
