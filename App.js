import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { NavBar, Header, Footer } from "./components/elements";
import { Home, WhatDo, About, NotFound, Mission } from "./components/pages";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main className="home">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/whatwedo" component={WhatDo} />
            <Route path="/about" component={About} />
            <Route path="/mission" component={Mission} />
            <Route path="/" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
