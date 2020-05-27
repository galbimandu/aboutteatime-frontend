import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className = "Footer">
        <div className = "top">
          <div className = "notification">
            <span>
              공지사항
            </span>
            <ul className = "notifList">
              <li className = "notif">

              </li>
            </ul>
          </div>
          <button className = "more">
            +더보기
          </button>
          <div className = "sns">
            <img className = "fb" alt="fb">
            </img>
            <img className = "insta" alt="insta">
            </img>
          </div>
        </div>
        <div className = "body">

        </div>
        <div className = "bottom">

        </div>
      </div>
    )
  }
}
export default Footer;