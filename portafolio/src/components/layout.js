import React from "react";
import { Link } from "react-router-dom";

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
      </React.Fragment>
    );
  }
}

export default layout;
