import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home";
import Layout from "./components/layout";
import Header from "./components/header";
import Api from "./components/juego";
import Avatar from "./components/avatar";
import About from "./components/about";
import Technologies from "./components/technologies";
import Contact from "./components/contact";
import NotFound from "./components/notFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Redirect exact from="/" to="/portafolio" />
            <Route exact path="/portafolio" component={Home} />
            <Route exact path="/me" component={Layout} />
            <Route exact path="/api" component={Api} />
            <Route exact path="/me/avatar" component={Avatar} />
            <Route exact path="/me/inicio" component={Header} />
            <Route exact path="/me/acerca" component={About} />
            <Route exact path="/me/tecnologias" component={Technologies} />
            <Route exact path="/me/contacto" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
