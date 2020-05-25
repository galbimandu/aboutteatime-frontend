import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/MainPage";
import Login from "./pages/Login/LoginPage";

class Routes extends Component {
  constructor() {
    super();
  }    
  
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;