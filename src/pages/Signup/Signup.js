import React, { Component } from "react";
import "./Signup.scss";
import { withRouter } from "react-router-dom";
import SignupTop from "../../components/SignupTop/SignupTop"


class Signup extends Component {
  constructor() {
    super();

    this.state = {
      realname: "",
      username: "",
      birthday: "",
      gender: null,
      provider: "",
      phone: "",
      password: "",
      password_confirm: "",
    }
  }

  handle_change = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  gender_change = bool => {
    this.setState({ gender: bool})
  }


  render() {
    return (
      <div className="Signup">
        <div className="header">
          <h1>
            <span className="text1">뷰티포인트 X </span>
            <span className="text2">오설록 쇼핑몰 </span>
            <span className="text1">회원가입</span>
          </h1>
        </div>
        <SignupTop handle_change={this.handle_change} gender_change={this.gender_change}/>
      </div>
    )
  }
}

export default withRouter(Signup);