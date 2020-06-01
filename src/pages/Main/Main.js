import React, { Component } from "react";
import "./Main.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";
import ActiveMain from "../../components/ActiveMain/ActiveMain";

class Main extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <ActiveMain />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
