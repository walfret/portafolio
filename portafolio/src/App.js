import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home";
import Layout from "./components/layout";
import Api from "./components/juego";
import Avatar from "./components/avatar";
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
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
