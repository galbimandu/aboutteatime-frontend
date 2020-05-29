import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/LoginPage";
import TeaShop from "./pages/TeaShop/TeaShopPage";
import SignupBottom from "./components/SignupBottom/SignupBottom";
import Basket from "./components/Basket/Basket";


class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/test" component={SignupBottom} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/teeshop" component={TeaShop} />
          <Route exact path="/basket" component={Basket} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
