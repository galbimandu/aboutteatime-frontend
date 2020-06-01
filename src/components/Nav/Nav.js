import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import logo_img from "../../images/logo_img.png";
import icon_arrowdown from "../../images/icon_arrowdown.png";
import icon_search from "../../images/icon_search.png";
import icon_bucket from "../../images/icon_bucket.png";
import icon_more from "../../images/icon_more.png";
import banner_img from "../../images/banner_img.png";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      hover: false,
      onmouse_shop: false,
      onmouse_tealife: false,
      onmouse_event: false,
      onmouse_about: false,
      onmouse_jeju: false,
      color_shop: false,
      color_tealife: false,
      color_event: false,
      color_about: false,
      color_jeju: false,
      sub_tea_hover: false,
      sub_teaware_hover: false,
    };
  }

  enter_shop = () => {
    this.setState({ hover: true, onmouse_shop: true, color_shop: true });
  };

  leave_shop = () => {
    this.setState({ onmouse_shop: false, color_shop: false });
  };

  enter_tealife = () => {
    this.setState({
      hover: true,
      onmouse_tealife: true,
      color_tealife: true,
      sub_tea_hover: false,
      sub_teaware_hover: false,
    });
  };

  leave_tealife = () => {
    this.setState({ onmouse_tealife: false, color_tealife: false });
  };

  enter_event = () => {
    this.setState({
      hover: true,
      onmouse_event: true,
      color_event: true,
      sub_tea_hover: false,
      sub_teaware_hover: false,
    });
  };

  leave_event = () => {
    this.setState({ onmouse_event: false, color_event: false });
  };

  enter_about = () => {
    this.setState({
      hover: true,
      onmouse_about: true,
      color_about: true,
      sub_tea_hover: false,
      sub_teaware_hover: false,
    });
  };

  leave_about = () => {
    this.setState({ onmouse_about: false, color_about: false });
  };

  enter_jeju = () => {
    this.setState({
      hover: true,
      onmouse_jeju: true,
      color_jeju: true,
      sub_tea_hover: false,
      sub_teaware_hover: false,
    });
  };

  leave_jeju = () => {
    this.setState({ onmouse_jeju: false, color_jeju: false });
  };

  enter_teashop = () => {
    this.setState({ sub_tea_hover: true, sub_teaware_hover: false });
  };

  enter_teaware = () => {
    this.setState({ sub_teaware_hover: true });
  };

  leave_sub = () => {
    this.setState({ sub_tea_hover: false, sub_teaware_hover: false });
  };

  // mouse leave 초기화
  menu_leave = () => {
    this.setState({
      hover: false,
      onmouse_shop: false,
      onmouse_tealife: false,
      onmouse_event: false,
      onmouse_about: false,
      onmouse_jeju: false,
      sub_tea_hover: false,
      sub_teaware_hover: false,
    });
  };

  render() {
    const {
      color_shop,
      color_tealife,
      color_event,
      color_about,
      color_jeju,
      hover,
      onmouse_shop,
      onmouse_tealife,
      onmouse_event,
      onmouse_about,
      onmouse_jeju,
      sub_tea_hover,
      sub_teaware_hover,
    } = this.state;
    return (
      <div className="Nav" onMouseLeave={this.menu_leave}>
        <div className="header_top_container">
          <div className="header_top">
            <div className="logo">
              <Link to="/">
                <img src={logo_img} alt="logo_img" />
              </Link>
            </div>
            <div className="buttons">
              <div className="login_wrap">
                <div className="login">
                  <Link to="/login">로그인</Link>
                </div>
              </div>
              <div className="signup_wrap">
                <div className="signup">
                  <Link to="/signup">회원가입</Link>
                </div>
              </div>
              <div className="language_container">
                <div className="language_wrap">
                  <div className="language">한국어</div>
                </div>
                <div className="icon_arrowdown_wrap">
                  <img
                    className="icon_arrowdown"
                    src={icon_arrowdown}
                    alt="icon_arrowdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom_container">
          <div className="header_bottom">
            <ul className="menu_wrap">
              <li className="idx0_wrap" onMouseLeave={this.leave_shop}>
                <div
                  className={color_shop ? "idx0_1" : "idx0"}
                  onMouseEnter={this.enter_shop}
                >
                  Shop
                </div>
              </li>
              <li className="idx1_wrap" onMouseLeave={this.leave_tealife}>
                <div
                  className={color_tealife ? "idx1_1" : "idx1"}
                  onMouseEnter={this.enter_tealife}
                >
                  Tea Life
                </div>
              </li>
              <li className="idx2_wrap" onMouseLeave={this.leave_event}>
                <div
                  className={color_event ? "idx2_1" : "idx2"}
                  onMouseEnter={this.enter_event}
                >
                  Event
                </div>
              </li>
              <li className="idx3_wrap" onMouseLeave={this.leave_about}>
                <div
                  className={color_about ? "idx3_1" : "idx3"}
                  onMouseEnter={this.enter_about}
                >
                  About OSULLOC
                </div>
              </li>
              <li className="idx4_wrap" onMouseLeave={this.leave_jeju}>
                <div
                  className={color_jeju ? "idx4_1" : "idx4"}
                  onMouseEnter={this.enter_jeju}
                >
                  Jeju Tea Museum
                </div>
              </li>
            </ul>
            <div className="nav_icon">
              <div className="search">
                <img
                  className="icon_search"
                  src={icon_search}
                  alt="icon_search"
                />
              </div>
              <div className="bucket">
                <img
                  className="icon_bucket"
                  src={icon_bucket}
                  alt="icon_bucket"
                />
              </div>
              <div className="more">
                <img className="icon_more" src={icon_more} alt="icon_more" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            hover ? "menu_hide_container_active" : "menu_hide_container"
          }
        >
          <div className="banner_hide_wrap">
            <span className="banner_text1">오늘만 이 가격</span>
            <span className="banner_text2">30% 할인된 가격에 구매할 기회!</span>
            <span className="banner_text2">놓치지 마세요~</span>
            <img className="banner_img" src={banner_img} alt="banner_img" />
          </div>
          <div className="menu_hide_wrap">
            {/* idx0_list */}
            <ul
              className={onmouse_shop ? "idx0_list2" : "idx0_list"}
              onMouseEnter={this.enter_shop}
              onMouseLeave={this.leave_shop}
            >
              <li
                className="idx0_list_detail"
                onMouseEnter={this.enter_teashop}
                onClick={() => this.props.history.push("/teashop")}
              >
                Tea Shop
              </li>
              <li
                className="idx0_list_detail"
                onMouseEnter={this.enter_teaware}
              >
                Tea ware Shop
              </li>
              <li className="idx0_list_detail" onMouseEnter={this.leave_sub}>
                Gift Shop
              </li>
              <li className="idx0_list_detail" onMouseEnter={this.leave_sub}>
                Weekly Best
              </li>
              <li className="idx0_list_detail" onMouseEnter={this.leave_sub}>
                공동구매
              </li>
              <li className="idx0_list_detail" onMouseEnter={this.leave_sub}>
                오설록 라운지
              </li>
            </ul>

            <ul
              className={onmouse_tealife ? "idx1_list2" : "idx1_list"}
              onMouseEnter={this.enter_tealife}
              onMouseLeave={this.leave_tealife}
            >
              <li className="idx1_list_detail">상품 구매후기</li>
              <li className="idx1_list_detail">선물하기</li>
              <li className="idx1_list_detail">다다일상(정기구독)</li>
              <li className="idx1_list_detail">맞춤추천</li>
              <li className="idx1_list_detail">MD's PICK</li>
              <li className="idx1_list_detail">매장 방문기</li>
            </ul>

            <ul
              className={onmouse_event ? "idx2_list2" : "idx2_list"}
              onMouseEnter={this.enter_event}
              onMouseLeave={this.leave_event}
            >
              <li className="idx2_list_detail">2020 GOLDEN PICK</li>
              <li className="idx2_list_detail">이벤트</li>
              <li className="idx2_list_detail">온라인 쇼핑혜택</li>
              <li className="idx2_list_detail">인스타그램</li>
              <li className="idx2_list_detail">About Tea</li>
            </ul>

            <ul
              className={onmouse_about ? "idx3_list2" : "idx3_list"}
              onMouseEnter={this.enter_about}
              onMouseLeave={this.leave_about}
            >
              <li className="idx3_list_detail">Brand Story</li>
              <li className="idx3_list_detail">Since 1979</li>
              <li className="idx3_list_detail">오설록 차밭 이야기</li>
              <li className="idx3_list_detail">숫자로 보는 오설록</li>
              <li className="idx3_list_detail">티하우스 메뉴</li>
              <li className="idx3_list_detail">매거진</li>
            </ul>

            <ul
              className={onmouse_jeju ? "idx4_list2" : "idx4_list"}
              onMouseEnter={this.enter_jeju}
              onMouseLeave={this.leave_jeju}
            >
              <li className="idx4_list_detail">티뮤지엄 소개</li>
              <li className="idx4_list_detail">티스톤 예약</li>
              <li className="idx4_list_detail">제주 오설록 맵</li>
            </ul>
            <div
              className={
                sub_tea_hover
                  ? "sub_menu_tea_container_active"
                  : "sub_menu_tea_container"
              }
            >
              <ul className="tea">
                <li className="tea_title">전체보기</li>
                <li className="tea_sub">Tea</li>
                <li>명차</li>
                <li>녹차/발효차/홍차</li>
                <li>허브티/무카페인</li>
                <li>블렌디드티</li>
                <li>웰니스티</li>
                <li>파우더</li>
                <li>세트</li>
              </ul>
              <ul className="tea">
                <li className="tea_title">&nbsp;</li>
                <li className="tea_sub">Tea Food</li>
                <li>베이커리</li>
                <li>초콜릿/잼</li>
              </ul>
              <ul className="tea">
                <li className="tea_title">&nbsp;</li>
                <li className="tea_sub">테마샵</li>
                <li>기프트몰</li>
                <li>라이프스타일몰</li>
                <li>오피스몰</li>
              </ul>
              git
            </div>
            <div
              className={
                sub_teaware_hover
                  ? "sub_menu_teaware_container_active"
                  : "sub_menu_teaware_container"
              }
            >
              <ul className="tea">
                <li className="tea_title">전체보기</li>
                <li className="tea_sub">용도별</li>
                <li>찻잔</li>
                <li>티팟</li>
                <li>소도구</li>
                <li>티푸드플레이트</li>
              </ul>
              <ul className="tea">
                <li className="tea_title">&nbsp;</li>
                <li className="tea_sub">브랜드별</li>
                <li>오설록</li>
                <li>광주요</li>
                <li>소일베이커</li>
                <li>서울번드</li>
                <li>토림도예</li>
                <li>소로시</li>
                <li>킨토</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
