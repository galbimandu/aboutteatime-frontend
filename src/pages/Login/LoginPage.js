import React, { Component } from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import url from "../../config";

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      memCheck: true,
      nonmemCheck: false,
      id: "",
      password: "",
      orderNum: "",
      orderTel: "",
      idRed: false,
      passwordRed: false,
      orderNumRed: false,
      orderTelRed: false,
    };
  }

  // 회원,비회원 탭 메뉴 //
  liFunc() {
    if (this.state.memCheck === true) {
      this.setState(
        { memCheck: false, nonmemCheck: true, id: "", password: "" },
        console.log(this.state)
      );
    }
    if (this.state.memCheck === false) {
      this.setState(
        { memCheck: true, nonmemCheck: false, orderNum: "", orderTel: "" },
        console.log(this.state)
      );
    }
  }

  // input값 핸들러 //
  inputHandler(event) {
    this.setState(
      { [event.target.name]: event.target.value },
      () => (this.validate(), console.log(this.state))
    );
  }

  // input값이 클릭되었을때 경고창을 추가하게 할 함수 //
  redAdd(event) {
    this.setState({ [event.target.name + "Red"]: true });
  }

  // 유효성 검사(input값비었는지, input이 들어오면 경고창 없어지게 할) //
  validate() {
    if (this.state.id.length !== 0) {
      this.setState({ idRed: false });
    }
    if (this.state.password.length !== 0) {
      this.setState({ passwordRed: false });
    }
    if (this.state.orderNum.length !== 0) {
      this.setState({ orderNumRed: false });
    }
    if (this.state.orderTel.length !== 0) {
      this.setState({ orderTelRed: false });
    }
    if ((this.state.id.length !== 0) & (this.state.password.length !== 0)) {
      this.setState({ validation: true }, () =>
        console.log(this.state.validation)
      );
    } else if (
      (this.state.orderNum.length !== 0) &
      (this.state.orderTel.length !== 0)
    ) {
      this.setState({ validation: true }, () =>
        console.log(this.state.validation)
      );
    } else if (
      (this.state.id.length === 0) &
      (this.state.password.length === 0)
    ) {
      this.setState({ validation: false }, () =>
        console.log(this.state.validation)
      );
    } else if (
      (this.state.orderNum.length === 0) &
      (this.state.orderTel.length === 0)
    ) {
      this.setState({ validation: false }, () =>
        console.log(this.state.validation)
      );
    }
  }

  // 마우스 클릭으로 유효성검사 실행하러 가는 함수 //
  clickToLoginFunc() {
    this.goValidate();
  }

  // 엔터키로 유효성검사 실행하러 가는 함수 //
  enterToLoginFunc(event) {
    if (event.keyCode === 13) {
      this.goValidate();
    }
  }

  // 유효성검사가 성공적이면 페이지 이동함수가 있는 곳으로 보낼 함수 //
  goValidate() {
    if (this.state.validation === true) {
      this.goToMain();
    } else {
      alert("입력하신 내용이 없습니다");
    }
  }

  // 페이지 이동 함수 //
  goToMain() {
    console.log(this.state);
    const token = localStorage.getItem("token");
    fetch(url + "/main", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        password: this.state.password,
      }),
    })
      // .then((res) => console.log(res))
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/Main");
        }
        if (res.status === 400 || res.status === 401) {
          alert("일시적으로 오류가 발생하였습니다.");
        } else {
          alert("서버에 일시적으로 오류가 발생하였습니다.");
        }
      });
  }

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage-wrap">
          <div className="loginLogo">
            <h2>Log In</h2>
          </div>
          <ul>
            <li
              onClick={this.liFunc.bind(this)}
              className={this.state.memCheck ? "trueli" : "falseli"}
            >
              <span>회원로그인</span>
            </li>
            <li
              onClick={this.liFunc.bind(this)}
              className={this.state.nonmemCheck ? "trueli" : "falseli"}
            >
              <span>비회원(주문조회)</span>
            </li>
          </ul>
          <div
            className={
              this.state.memCheck
                ? "memberInput divTrue"
                : "memberInput divFalse"
            }
            onKeyDown={this.enterToLoginFunc.bind(this)}
          >
            <input
              onClick={this.redAdd.bind(this)}
              className={this.state.idRed ? "idAdd" : "nonidAdd"}
              type="text"
              name="id"
              placeholder="아이디"
              onChange={this.inputHandler.bind(this)}
              value={this.state.id}
            ></input>
            <div
              className={
                this.state.idRed ? "hiddenDiv idRedOn" : "hiddenDiv idRedOff"
              }
            >
              <span>아이디를 입력해주세요.</span>
            </div>
            <input
              onClick={this.redAdd.bind(this)}
              className={
                this.state.passwordRed ? "passwordAdd" : "nonpasswordAdd"
              }
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={this.inputHandler.bind(this)}
              value={this.state.password}
            ></input>
            <div
              className={
                this.state.passwordRed
                  ? "hiddenDiv passwordRedOn"
                  : "hiddenDiv passwordRedOff"
              }
            >
              <span>비밀번호를 입력해주세요.</span>
            </div>
            <button onClick={this.clickToLoginFunc.bind(this)}>로그인</button>
          </div>
          <div
            className={
              this.state.nonmemCheck
                ? "nonmemberInput divTrue"
                : "nonmemberInput divFalse"
            }
            onKeyDown={this.enterToLoginFunc.bind(this)}
          >
            <input
              onClick={this.redAdd.bind(this)}
              className={
                this.state.orderNumRed ? "orderNumAdd" : "nonorderNumAdd"
              }
              type="text"
              name="orderNum"
              placeholder="주문번호"
              onChange={this.inputHandler.bind(this)}
              value={this.state.orderNum}
            ></input>
            <div
              className={
                this.state.orderNumRed
                  ? "hiddenDiv orderNumRedOn"
                  : "hiddenDiv orderNumRedOff"
              }
            >
              <span>주문번호를 입력해주세요.</span>
            </div>
            <input
              onClick={this.redAdd.bind(this)}
              className={
                this.state.orderTelRed ? "orderTelAdd" : "nonorderTelAdd"
              }
              type="text"
              name="orderTel"
              placeholder="주문자 연락처"
              onChange={this.inputHandler.bind(this)}
              value={this.state.orderTel}
            ></input>
            <div
              className={
                this.state.orderTelRed
                  ? "hiddenDiv orderTelRedOn"
                  : "hiddenDiv orderTelRedOff"
              }
            >
              <span>주문시 입력한 연락처를 정확히 입력해 주세요.</span>
              <span>연락처 입력시 '-'를 포함해야 합니다.</span>
            </div>
            <button onClick={this.clickToLoginFunc.bind(this)}>로그인</button>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="directButton">
            <Link to="/">회원가입</Link>
            <span>|</span>
            <Link to="/">아이디 찾기</Link>
            <span>|</span>
            <Link to="/">비밀번호 찾기</Link>
          </div>
          <div className="snsButton">
            <a
              className="kakaoButton"
              href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fredirect_uri%3Dkakaojs%26response_type%3Dcode%26state%3Dytsdlwn891ntlnj5ms4vz%26proxy%3DeasyXDM_Kakao_zyuca3oqd5a_provider%26ka%3Dsdk%252F1.39.0%2520os%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.osulloc.com%26origin%3Dhttps%253A%252F%252Fwww.osulloc.com%26client_id%3D10efbf6471f1f69df223d382a6e5c135"
              target="_blank"
            >
              <img src={require("../../images/login_kakao.png")} alt="kakao" />
              <span>카카오 계정으로 로그인</span>
              <p></p>
            </a>
            <a
              className="naverButton"
              href="https://nid.naver.com/nidlogin.login?oauth_token=HZE8goU3Gn8wEaylZP&consumer_key=rTEWJSFT1cw00Jm51n_3&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3D7ee1828b-d377-4e03-894c-dbcd24d7244b%26client_id%3DrTEWJSFT1cw00Jm51n_3%26redirect_uri%3Dhttps%253A%252F%252Fwww.osulloc.com%252Fkr%252Fko%252Flogin%252FsnsloginCallBack%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype="
              target="_blank"
            >
              <img src={require("../../images/login_naver.png")} alt="kakao" />
              <span>네이버 계정으로 로그인</span>
              <p></p>
            </a>
            <a
              className="facebookButton"
              href="https://www.facebook.com/login.php?skip_api_login=1&api_key=414492629203266&kid_directed_site=0&app_id=414492629203266&signed_next=1&next=https%3A%2F%2Fweb.facebook.com%2Fv4.0%2Fdialog%2Foauth%3Fapp_id%3D414492629203266%26cbt%3D1590390211670%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter.php%253Fversion%253D46%2523cb%253Df5014660731%2526domain%253Dwww.osulloc.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.osulloc.com%25252Ff689651fd7726%2526relation%253Dopener%26client_id%3D414492629203266%26display%3Dpopup%26domain%3Dwww.osulloc.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.osulloc.com%252Fkr%252Fko%252Flogin%253Fr%253Dhttps%253A%252F%252Fwww.osulloc.com%252Fkr%252Fko%252Flogin%2523%26locale%3Den_US%26logger_id%3Dfe3f81dcb93d08%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter.php%253Fversion%253D46%2523cb%253Df131c0dbc73909c%2526domain%253Dwww.osulloc.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.osulloc.com%25252Ff689651fd7726%2526relation%253Dopener%2526frame%253Df31a42bf1d1484%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26sdk%3Djoey%26version%3Dv4.0%26ret%3Dlogin%26fbapp_pres%3D0&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df131c0dbc73909c%26domain%3Dwww.osulloc.com%26origin%3Dhttps%253A%252F%252Fwww.osulloc.com%252Ff689651fd7726%26relation%3Dopener%26frame%3Df31a42bf1d1484%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_US&pl_dbl=0&_rdc=1&_rdr"
              target="_blank"
            >
              <img
                src={require("../../images/login_facebook.png")}
                alt="kakao"
              />
              <span>페이스북 계정으로 로그인</span>
              <p></p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
