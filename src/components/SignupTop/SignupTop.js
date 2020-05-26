import React, { Component } from "react";
import "./SignupTop.scss";
import { withRouter } from "react-router-dom";
import select_arrow from "../../images/select_arrow.png"
import check_clicked from "../../images/check_clicked.jpg"
import check_toclick from "../../images/check_toclick.jpg"
import check_img from "../../images/check_img.png"

class SignupTop extends Component {
  constructor() {
    super();

    this.state = {
      male_active: "gender_male_wrap",
      female_active: "gender_female_wrap2",
      direct_active: "select_password_direct",
      auto_active: "select_password_auto2",
      direct_check: check_clicked,
      auto_check: check_toclick,
      hide_password: "user_password_wrap",
    }
  }

  male_checked = () => {
    this.setState({ male_active: "gender_male_wrap2", female_active: "gender_female_wrap"})
    this.props.gender_change(true)
  }

  female_checked = () => {
    this.setState({ male_active: "gender_male_wrap", female_active: "gender_female_wrap2"})
    this.props.gender_change(false)
  }

  direct_checked = () => {
    this.setState({ direct_active: "select_password_direct", auto_active: "select_password_auto2", direct_check: check_clicked, auto_check: check_toclick, hide_password: "user_password_wrap"})
  }

  auto_checked = () => {
    this.setState({ direct_active: "select_password_direct2", auto_active: "select_password_auto", direct_check: check_toclick, auto_check: check_clicked, hide_password: "user_password_wrap2"})
  }




  render() {
    return (
      <div className="SignupTop">
        <div className="content">
          <h2>
            <strong className="welcome">뷰티포인트 통합멤버십 회원가입을 환영합니다!</strong>
            <p>아모레퍼시픽 통합멤버십(뷰티포인트)에 가입하시면 <strong className="brand">오설록 쇼핑몰</strong> 외 모든 브랜드 온/오프 매장에서 상품을 구매 할 때마다 현금처럼 사용할 수 있는 포인트 적립과 사용 등 다양한 혜택을 받으실 수 있습니다.</p>
          </h2>
        </div>
        <div className="join_table">
          <div className="user_name_wrap">
            <input onChange={this.props.handle_change} type="text" id="user_name" name="realname" className="user_name" placeholder="이름(실명으로 입력해주세요)"></input>
            {/* <label for="user_name" className="user_name_label">이름(실명으로 입력해주세요)</label> */}
          </div>
          <div className="birth_gender_wrap">
            <input onChange={this.props.handle_change} type="text" maxLength="8" id="user_birth" name="birthday" className="user_birth" placeholder="생년월일8자리(ex.19980905)"></input>
            {/* <label for="user_birth" className="user_birth_label">생년월일8자리<span>(ex.19980905)</span></label> */}
            <ul className="gender_wrap">
              <li className={this.state.male_active} onClick={this.male_checked}>
                <p className="gender_male" name="gender">남자</p>
                <img className="check_img" src={check_img} alt="check_img" />
              </li>
              <li className={this.state.female_active} onClick={this.female_checked}>
                <p className="gender_female" name="gender">여자</p>
                <img className="check_img" src={check_img} alt="check_img" />
              </li>
            </ul>
          </div>
          <div className="tel_wrap">
            <div className="select_telecom">
              <select onChange={this.props.handle_change} name="provider" id="telecom">
                <option>통신사 선택</option>
                <option>SKT</option>
                <option>KT</option>
                <option>LG U+</option>
                <option>SKT 알뜰폰</option>
                <option>KT 알뜰폰</option>
                <option>LG U+ 알뜰폰</option>
              </select>
              <img className="select_arrow" src={select_arrow} alt="select_arrow"/>
            </div>
            <div className="user_tel_wrap">
              <input onChange={this.props.handle_change} id="user_tel" type="tel" name="phone" min="10" maxLength="11" placeholder="전화번호 입력"></input>
              {/* <label for="user_tel" className="user_tel_label">전화번호 입력</label> */}
            </div>
          </div>
          <div className="user_id_wrap">
            <p className="description">* 아이디 미입력 시 휴대폰번호로 가입되며 가입완료 후 변경 불가합니다.</p>
          </div>
          <div className="user_id_wrap2">
            <input onChange={this.props.handle_change} id="user_id" maxLength="12" type="text" name="username" className="user_id" placeholder="아이디 (4~12자)"></input>
            {/* <label for="user_id" className="user_id_label">아이디 (4~12자 영문 대·소문자)</label> */}
          </div>
          <div className="select_password_wrap">
            <div className={this.state.direct_active} onClick={this.direct_checked}>
              <div className="password_img">
                <img className="check_toclick" src={this.state.direct_check} alt="check_clicked" />
              </div>
              <div className="password_direct">
                <p className="password_text">비밀번호 직접입력</p>
              </div>
            </div>
            <div className={this.state.auto_active} onClick={this.auto_checked}>
              <div className="password_img2">
                <img className="check_toclick" src={this.state.auto_check} alt="check_toclick" />
              </div>
              <div className="password_auto">
                <p className="password_text2">비밀번호 자동발급</p>
              </div>
            </div>
          </div>
          <div className={this.state.hide_password}>
            <div className="input_password">
              <input onChange={this.props.handle_change} id="user_password" maxLength="16" type="password" name="password" className="user_password" autoCapitalize="off" placeholder="비밀번호는 (6~16자)"></input>
              {/* <label for="user_password" className="input_password_label">비밀번호는 6~16자 영문 대소문자, 숫자, 특수문자 중 최소 2가지 이상 조합하여 입력해주세요</label> */}
            </div>
            <div className="confirm_password">
              <input id="user_password" type="password" className="user_password" maxLength="16" autoCapitalize="off" placeholder="비밀번호 확인"></input>
              {/* <label for="user_password" className="confirm_password_label">비밀번호 확인</label> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupTop);