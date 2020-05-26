import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Main_nav.scss";
import logo_img from "../../images/logo_img.png";
import icon_arrowdown from "../../images/icon_arrowdown.png";


class Main_nav extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="Main_nav">
        <div className="header_top">
          <div className="logo">
            <img src={logo_img} alt="logo_img" />
          </div>
          <div className="buttons">
            <div className="login_wrap">
              <div className="login">로그인</div>
            </div>
            <div className="signup_wrap">
              <div className="signup">회원가입</div>
            </div>
            <div className="language_container">
              <div className="language_wrap">
                <div className="language">한국어</div>
              </div>
              <div className="icon_arrowdown_wrap">
                <img className="icon_arrowdown" src={icon_arrowdown} alt="icon_arrowdown" />
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
        
        </div>
        
      </div>

    )
  }
}

export default withRouter(Main_nav);