import "./SignupBottom.scss";
import click from "../../images/click.jpg";
import clicked from "../../images/clicked.jpg";
import arrowright from "../../images/arrowright.png";
import React, { Component } from "react";
import url from "../../config";

class SignupBottom extends Component {
  constructor() {
    super();
    this.state = {
      isAllSelected: false,
      isAllUnSelected: true,
      zero: false,
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      btnColor: false,
      view: "appear",
      foldUp: "show",
    };
  }
  signUp = () => {
    if (this.state.one === true && this.state.two === true) {
      fetch(url.url + "/signup", {
        method: "POST",
        body: JSON.stringify({
          realname: this.props.realname,
          username: this.props.username,
          birthday: this.props.birthday,
          gender: this.props.gender,
          provider: this.props.provider,
          phone: this.props.phone,
          password: this.props.password,
        }),
      }).then((response) => {
        if (response.status === 400) alert("fail");
        if (response.status === 200) {
          this.props.history.push("/login");
        }
      });
    }
  };
  changeShape = (num) => {
    if (num === "zero") {
      this.setState({ [num]: !this.state[num] }, () => {
        if (this.state.zero === false) {
          this.setState({ isAllUnSelected: true, isAllSelected: false }, () => {
            this.checkAll();
          });
        } else {
          this.setState({ isAllSelected: true, isAllUnSelected: false }, () => {
            this.checkAll();
          });
        }
      });
    } else {
      this.setState({ [num]: !this.state[num] }, () => {
        if (
          this.state.one === true &&
          this.state.two === true &&
          this.state.three === true &&
          this.state.four === true &&
          this.state.five === true &&
          this.state.six === true
        ) {
          this.setState(
            { zero: true, isAllUnSelected: false, isAllSelected: true },
            () => {
              this.checkAll();
            }
          );
        } else if (
          this.state.one === false &&
          this.state.two === false &&
          this.state.three === false &&
          this.state.four === false &&
          this.state.five === false &&
          this.state.six === false
        ) {
          this.setState(
            { zero: false, isAllUnSelected: true, isAllSelected: false },
            () => {
              this.checkAll();
            }
          );
        } else if (this.state[num] === false && this.state.zero !== false) {
          this.setState({
            zero: false,
            isAllUnSelected: false,
            isAllSelected: false,
          });
        } else {
          this.setState({ isAllUnSelected: false, isAllSelected: false });
        }
        this.checkBtn();
      });
    }
  };
  checkAll = () => {
    if (this.state.isAllSelected) {
      this.setState(
        {
          zero: true,
          one: true,
          two: true,
          three: true,
          four: true,
          five: true,
          six: true,
        },
        () => {
          this.checkBtn();
        }
      );
    } else if (this.state.isAllUnSelected) {
      this.setState(
        {
          zero: false,
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
        },
        () => {
          this.checkBtn();
        }
      );
    }
  };
  checkBtn = () => {
    if (this.state.one && this.state.two) {
      this.setState({ btnColor: true });
    } else {
      this.setState({ btnColor: false });
    }
  };
  foldUp = () => {
    if (this.state.view === "appear") {
      this.setState({ view: "disappear" });
    } else {
      this.setState({ view: "appear" });
    }
    if (this.state.foldUp === "show") {
      this.setState({ foldUp: "hide" });
    } else {
      this.setState({ foldUp: "show" });
    }
  };
  render() {
    console.log(this.state.btnColor);
    return (
      <div className="SignupBottom">
        <div className="topBar">
          <button
            onClick={() => this.changeShape("zero")}
            type="checkbox"
            className="checkbox"
          >
            <img
              src={this.state.zero === false ? click : clicked}
              alt="click"
            />
          </button>
          <span>모든 약관 동의</span>
          <button
            className={this.state.foldUp}
            onClick={() => this.foldUp()}
          ></button>
        </div>
        <div className={this.state.view}>
          <div className="agreement_info">
            <p className="info_text">
              아래 모든 약관 (필수/선택 포함) 및 광고성 정보수신 동의 내용을
              확인하고 전체 동의합니다. ※ 선택 항목에 대한 동의를 거부하더라도
              회원가입에 영향을 미치지 않습니다.
            </p>
          </div>
          <div className="account_check">
            <span className="title">
              아모레퍼시픽 통합 멤버십 뷰티포인트 회원약관
            </span>
            <ul>
              <li>
                <button
                  onClick={() => this.changeShape("one")}
                  type="checkbox"
                  className="checkbox"
                >
                  <img src={this.state.one === false ? click : clicked} />
                </button>
                <span>[필수] 뷰티포인트 서비스 이용약관</span>
                <img src={arrowright} />
              </li>
              <li>
                <button
                  onClick={() => this.changeShape("two")}
                  type="checkbox"
                  className="checkbox"
                >
                  <img src={this.state.two === false ? click : clicked} />
                </button>
                <span>[필수] 개인정보 이용 및 수집에 대한 동의</span>
                <img src={arrowright} />
              </li>
              <li>
                <button
                  onClick={() => this.changeShape("three")}
                  type="checkbox"
                  className="checkbox"
                >
                  <img src={this.state.three === false ? click : clicked} />
                </button>
                <div>
                  <span>[선택] 개인정보 제3자 제공 동의</span>
                  <span>※ 외부 컨텐츠 마케팅 활용</span>
                </div>
                <img src={arrowright} />
              </li>
              <li>
                <button
                  onClick={() => this.changeShape("four")}
                  type="checkbox"
                  className="checkbox"
                >
                  <img src={this.state.four === false ? click : clicked} />
                </button>
                <span>[선택] 국외이전동의</span>
                <img src={arrowright} />
              </li>
            </ul>
          </div>
          <div className="ad_check">
            <span className="title">광고성 정보 수신 동의</span>
            <span className="sub">쇼핑 혜택, 이벤트 소식을 받아보세요</span>
            <ul>
              <li>
                <button
                  onClick={() => this.changeShape("five")}
                  type="checkbox"
                  className="checkbox"
                >
                  <img src={this.state.five === false ? click : clicked} />
                </button>
                <span>[선택] 뷰티포인트 문자 수신 동의</span>
              </li>
              <li>
                <button
                  onClick={() => this.changeShape("six")}
                  type="checkbox"
                  className="checkbox"
                >
                  <img src={this.state.six === false ? click : clicked} />
                </button>
                <span>[선택] 온라인 사이트 문자 수신 동의</span>
              </li>
            </ul>
          </div>
          <div className="personal_info">
            <span className="title">개인정보 처리 위탁에 대한 안내</span>
            <p className="info_text">
              ※ 아모레퍼시픽은 서비스 향상 및 원활한 전산 처리 등을 위하여
              이용자의 개인정보 관리를 외부 전문업체에 위탁하고 있습니다.
              아모레퍼시픽의 업무를 위탁받는 자 및 업무의 내용은 아모레퍼시픽
              홈페이지{" "}
              <strong>
                https://www.beautypoint.co.kr/footer/privacy/personal.html
              </strong>{" "}
              에서 확인 하실 수 있습니다.
            </p>
          </div>
        </div>
        <div className="final_btn">
          <button
            onClick={this.signUp()}
            className={this.state.btnColor.toString()}
          >
            본인인증 및 회원가입
          </button>
        </div>
        <div className="foreign_btn">
          <button>외국인 회원가입></button>
        </div>
      </div>
    );
  }
}

export default SignupBottom;
