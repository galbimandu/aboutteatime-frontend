import React, { Component } from "react";
import NavMove from "../../components/NavMove/NavMove";
import "./LoginPage.scss";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import TopGoButton from "../../components/TopGoButton/TopGoButton";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      navMoving: false,
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="loginPage">
        <NavMove />
        <div
          className={
            this.state.navMoving
              ? "contents contentsOn"
              : "contents contentsOff"
          }
        >
          <Login />
          <Footer />
        </div>
        <TopGoButton />
      </div>
    );
  }
}

export default LoginPage;
