import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TeaShopSubMenu.scss";

class TeaShopSubMenu extends Component {
  constructor() {
    super();

    this.state = {
      teaOn: false,
      teaFoodOn: false,
      themaOn: false,
    };
  }

  teaOnFunc() {
    this.setState({ teaOn: true });
  }

  teaOffFunc() {
    this.setState({ teaOn: false });
  }

  teaFoodOnFunc() {
    this.setState({ teaFoodOn: true });
  }

  teaFoodOffFunc() {
    this.setState({ teaFoodOn: false });
  }

  themaOnFunc() {
    this.setState({ themaOn: true });
  }

  themaOffFunc() {
    this.setState({ themaOn: false });
  }

  render() {
    return (
      <div className="TeaShopSubMenu">
        <div className="subMenuTitle">
          <span>TEA SHOP</span>
        </div>
        <div className="subMenuList">
          <div className="subMenuListinner">
            <li
              onMouseOver={this.teaOnFunc.bind(this)}
              onMouseLeave={this.teaOffFunc.bind(this)}
              onClick={() => this.props.createPush("category", "Tea")}
            >
              Tea
              <div
                className={
                  this.state.teaOn
                    ? "hiddenDiv hiddenOn"
                    : "hiddenDiv hiddenOff"
                }
              >
                <img
                  src={require("../../images/ico_subMenu.png")}
                  alt="ico_subMenu"
                />
                <div className="hididinDivInner">
                  <ul>
                    <li>
                      <Link to="/">전체상품</Link>
                    </li>
                    <li>
                      <Link to="/">명차</Link>
                    </li>
                    <li>
                      <Link to="/">녹차/발효차/홍차</Link>
                    </li>
                    <li>
                      <Link to="/">허브차(무카페인)</Link>
                    </li>
                    <li>
                      <Link to="/">블렌디드티</Link>
                    </li>
                    <li>
                      <Link to="/">웰니스티</Link>
                    </li>
                    <li>
                      <Link to="/">파우더</Link>
                    </li>
                    <li>
                      <Link to="/">세트</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              onMouseOver={this.teaFoodOnFunc.bind(this)}
              onMouseLeave={this.teaFoodOffFunc.bind(this)}
              onClick={() => this.props.createPush("category", "Tea Food")}
            >
              Tea Food
              <div
                className={
                  this.state.teaFoodOn
                    ? "hiddenDiv hiddenOn"
                    : "hiddenDiv hiddenOff"
                }
              >
                <img
                  src={require("../../images/ico_subMenu.png")}
                  alt="ico_subMenu"
                />
                <div className="hididinDivInner">
                  <ul>
                    <li>
                      <Link to="/">전체상품</Link>
                    </li>
                    <li>
                      <Link to="/">베이커리</Link>
                    </li>
                    <li>
                      <Link to="/">초콜릿/잼</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              onMouseOver={this.themaOnFunc.bind(this)}
              onMouseLeave={this.themaOffFunc.bind(this)}
              onClick={() => this.props.createPush("category", "테마샵")}
            >
              테마샵
              <div
                className={
                  this.state.themaOn
                    ? "hiddenDiv hiddenOn"
                    : "hiddenDiv hiddenOff"
                }
              >
                <img
                  src={require("../../images/ico_subMenu.png")}
                  alt="ico_subMenu"
                />
                <div className="hididinDivInner">
                  <ul>
                    <li>
                      <Link to="/">전체상품</Link>
                    </li>
                    <li>
                      <Link to="/">기프트몰</Link>
                    </li>
                    <li>
                      <Link to="/">라이프스타일몰</Link>
                    </li>
                    <li>
                      <Link to="/">오피스몰</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaShopSubMenu;
