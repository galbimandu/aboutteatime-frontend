import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/LoginPage";
import TeaShop from "./pages/TeaShop/TeaShopPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/teashop" component={TeaShop} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
