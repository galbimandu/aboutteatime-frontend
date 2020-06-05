import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SignupTop from "../../components/SignupTop/SignupTop";
import SignupBottom from "../../components/SignupBottom/SignupBottom";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      realname: "",
      username: "",
      birthday: "",
      gender: "",
      provider: "",
      phone: "",
      password: "",
      password_confirm: "",
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  handle_change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  gender_change = (e) => {
    this.setState({ gender: e });
  };

  render() {
    const {
      realname,
      username,
      birthday,
      gender,
      provider,
      phone,
      password,
    } = this.state;
    console.log(this.state);
    return (
      <div className="Signup">
        <div className="header">
          <h1>
            <span className="text1">뷰티포인트 X </span>
            <span className="text2">오설록 쇼핑몰 </span>
            <span className="text1">회원가입</span>
          </h1>
        </div>
        <SignupTop
          handle_change={this.handle_change}
          gender_change={this.gender_change}
        />
        <SignupBottom
          realname={realname}
          username={username}
          birthday={birthday}
          gender={gender}
          provider={provider}
          phone={phone}
          password={password}
        />
      </div>
    );
  }
}

export default withRouter(Signup);
