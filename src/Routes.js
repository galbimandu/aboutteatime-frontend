import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import Login from "./pages/LoginPage/LoginPage";
import Basket from "./components/Basket/Basket";
import TeaShopPage from "./pages/TeaShop/TeaShopPage";
import ItemDetial from "./components/ItemDetail/ItemDetail";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Signup from "./pages/Signup/Signup";
import comment from "./components/Comment/Comment";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={ItemDetial} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/teashop" component={TeaShopPage} />
          <Route exact path="/detail/:minchang" component={ItemDetailPage} />
          <Route exact path="/comment" component={comment} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
