import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Nav.scss";
import logo_img from "../../images/logo_img.png";
import icon_arrowdown from "../../images/icon_arrowdown.png";
import icon_search from "../../images/icon_search.png";
import icon_bucket from "../../images/icon_bucket.png";
import icon_more from "../../images/icon_more.png";


class Nav extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  goto_main = () => {
    this.props.history.push('/')
  }

  goto_signup = () => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div className="Nav">
        <div className="header_top_container">
          <div className="header_top">
            <div className="logo" onClick={this.goto_main}>
              <img src={logo_img} alt="logo_img" />
            </div>
            <div className="buttons">
              <div className="login_wrap">
                <div className="login">로그인</div>
              </div>
              <div className="signup_wrap" onClick={this.goto_signup}>
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
        </div>
        <div className="header_bottom">
          <ul className="menu_wrap">
            <li className="idx0_wrap">
              <div className="idx0">Shop</div>
            </li>
            <li className="idx1_wrap">
              <div className="idx1">Tea Life</div>
            </li>
            <li className="idx2_wrap">
              <div className="idx2">Event</div>
            </li>
            <li className="idx3_wrap">
              <div className="idx3">About OSULLOC</div>
            </li>
            <li className="idx4_wrap">
              <div className="idx4">Jeju Tea Museum</div>
            </li>
          </ul>
          <div className="nav_icon">
            <div className="search">
              <img className="icon_search" src={icon_search} alt="icon_search" />
            </div>
            <div className="bucket">
              <img className="icon_bucket" src={icon_bucket} alt="icon_bucket" />
            </div>
            <div className="more">
              <img className="icon_more" src={icon_more} alt="icon_more" />
            </div>
          </div>
        </div>
        
      </div>

    )
  }
}

export default withRouter(Nav);