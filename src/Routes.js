import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import Login from "./pages/LoginPage/LoginPage";
import Basket from "./components/Basket/Basket";
import TeaShopPage from "./pages/TeaShop/TeaShopPage";
import ItemDetial from "./components/ItemDetail/ItemDetail";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Comment from "./components/Comment/Comment";
import Signup from "./pages/Signup/Signup";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={ItemDetial} />
          <Route exact path="/user/sign-in" component={Login} />
          <Route exact path="/order/cart" component={Basket} />
          <Route exact path="/teashop/list" component={TeaShopPage} />
          <Route exact path="/teashop/detail/:id" component={ItemDetailPage} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/user/sign-up" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
