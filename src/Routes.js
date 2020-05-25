import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/MainPage";


class Routes extends Component {
  constructor() {
    super();
  }    
  
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;