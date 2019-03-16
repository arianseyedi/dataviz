import React, { Component } from "react";
import Data from "./containers/Data";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import AppBar from "./components/shared/CustomAppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.renderAppbar()}
        {this.renderRoutes()}
      </div>
    );
  }

  renderAppbar = () => <AppBar />;
  renderRoutes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route to="/data" component={Data} />
    </Switch>
  );
}

export default App;
