import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/LoginPage";
import Basket from "./components/Basket/Basket";
import TeaShopPage from "./pages/TeaShop/TeaShopPage";
import ItemDetial from "./components/ItemDetail/ItemDetail";
import Active from "./components/ActiveMain/ActiveMain";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/test" component={ItemDetial} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/teashop" component={TeaShopPage} />
          <Route exact path="/active" component={Active} />
          <Route exact path="/detail" component={ItemDetailPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
