import React, { Component } from 'react';
import './Main.scss';
import Nav from "../../components/Nav/Nav";
import { withRouter } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();

    this.state = {

      
    }
  }

  render() {
    return (
      <div className="Main">
        <Nav />
      </div>

    )
  }
}

export default withRouter(Main);