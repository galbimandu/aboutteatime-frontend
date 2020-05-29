import React, { Component } from "react";
import "./Basket.scss";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav"

class Basket extends Component {
  constructor() {
    super();

    this.state = {


    }
  }

  render() {
    return (
      <div className="Basket">
        <Nav />


      </div>
    )
  }
}

export default withRouter(Basket);