import React, { Component } from "react";
import "./Main.scss";
import Nav from "../../components/Nav/Nav";
import VideoLayer from "../../components/VideoLayer/VideoLayer";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <VideoLayer />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
