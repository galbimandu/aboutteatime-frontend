import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/MainPage";
import Login from "./pages/Login/LoginPage";
import TeeShop from "./pages/TeeShop/TeeShopPage";
import SignupBottom from "./components/SignupBottom/SignupBottom";

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={SignupBottom} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/teeshop" component={TeeShop} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
