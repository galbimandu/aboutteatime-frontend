import React, { Component } from "react";
import NavMove from "../../components/NavMove/NavMove";
import Footer from "../../components/Footer/Footer";
import ActiveMain from "../../components/ActiveMain/ActiveMain";
import "./MainPage.scss";

class MainPage extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="Main">
        <NavMove />
        <ActiveMain />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
