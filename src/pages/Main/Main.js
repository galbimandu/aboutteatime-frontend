import React, { Component } from 'react';
import './Main.scss';
import Main_nav from "../../components/Main_nav/Main_nav";
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
        <Main_nav />
      </div>

    )
  }
}

export default withRouter(Main);