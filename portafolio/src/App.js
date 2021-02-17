import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home";
import Layout from "./components/layout";
import Api from "./components/api";
import Avatar from "./components/avatar";
import NotFound from "./components/notFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Redirect from="/portafolio" to="/" />
            <Route exact path="/" component={Home} />
            <Route path="/me" component={Layout} />
            <Route path="/api" component={Api} />
            <Route path="/avatar" component={Avatar} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
