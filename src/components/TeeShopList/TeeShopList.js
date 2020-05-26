import React, { Component } from "react";
import "./TeeShopList.scss";

class TeeShopList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="teeShopList">
        <div className="teeShopListwrap">
          <div className="subMenu">
            <h2>TEA SHOP</h2>
            <h3>Tea</h3>
            <h3>Tea Food</h3>
            <h3>테마샵</h3>
          </div>
          <div className="contents">
            <div className="cotentsTitle">
              <span>TEA SHOP</span>
              <span>리뷰많은순</span>
              <span>판매순</span>
              <span>신상품순</span>
              <span>높은가격순</span>
              <span>낮은가격순</span>
            </div>
            <div className="goodsList">
              <div className="testDiv">1</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeeShopList;
