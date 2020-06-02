import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./BasketFeeds.scss";
import mock_image from "../../../images/mock_image.png";

class BasketFeeds extends Component {


  render() {
    return (
      <tr className="BasketFeeds">
        <td className="checkbox_container">
          <div className={this.props.checkbox_each ? "checkbox_wrap_checked" : "checkbox_wrap"} onClick={this.props.checkbox_each_checked}>
            <input className="checkbox" type="checkbox"></input>
            <span className="checkbox_custom"></span>
          </div>
        </td>
        <td className="info_container">
          <div className="info_wrap">
            <img className="mock_img" src={mock_image} alt="mock_image" />
            <div className="info_text_wrap">
              <div className="product_name">녹차밀크스프레드 200 g</div>
              <p className="product_detail">포장불가</p>
            </div>
          </div>
        </td>
        <td className="qty_container">
          <div className="qty_box">
            <input className="qty_input" type="number" min="1" max="1000" value="1"></input>
            <button className="qty_subtract">-</button>
            <button className="qty_add">+</button>
          </div>
        </td>
        <td className="price_container">
          <span className="price">
            <span className="num">8,500</span>
            <i className="unit">원</i>
          </span>
        </td>
        <td className="selling_price_container">
          <span className="price">
            <span className="num">8,500</span>
            <i className="unit">원</i>
          </span>
        </td>
        <td className="func_container">
          <div className="btn_group">
            <button className="buy_direct">바로구매</button>
            <button className="add_wish">위시리스트</button>
            <button className="remove">삭제</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default withRouter(BasketFeeds);