import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/MainPage";
import Test from "./components/TeaShopItem/Test";
import SignupBottom from "./components/SignupBottom/SignupBottom";
import Footer from "./components/Footer/Footer"
class Routes extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={SignupBottom} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;