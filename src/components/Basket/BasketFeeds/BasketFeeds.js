import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import url from "../../../config";
import "./BasketFeeds.scss";

class BasketFeeds extends Component {
  constructor() {
    super();

    this.state = {
      num: 0,
      remove_item: false,
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    this.setState({ num: this.props.quantity });
    console.log(this.props.match);
  };

  btn_handler = (number) => {
    const token = localStorage.getItem("token");
    fetch(url + "/order/cart", {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        cart_id: this.props.cart_id,
        delta: number,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.handleData();
      }
    });
  };

  add_handler = (number) => {
    this.btn_handler(number);
    this.setState({ num: this.state.num + number });
  };

  subtract_handler = (number) => {
    console.log(number);
    this.btn_handler(number);
    if (this.state.num === 1) {
      return;
    } else if (this.state.num > 1) {
      this.setState({ num: this.state.num + number });
    }
  };

  remove_item = () => {
    const token = localStorage.getItem("token");
    fetch(`${url}/order/cart`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        cart_id: this.props.cart_id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.handleData();
      }
    });
  };

  render() {
    const {
      checkbox_each,
      checkbox_each_checked,
      image,
      title,
      benefits,
      price,
      sub_total,
      id,
    } = this.props;

    return (
      <tr className="BasketFeeds">
        <td className="checkbox_container">
          <div
            className={
              checkbox_each ? "checkbox_wrap_checked" : "checkbox_wrap"
            }
            onClick={checkbox_each_checked}
          >
            <input className="checkbox" type="checkbox"></input>
            <span className="checkbox_custom"></span>
          </div>
        </td>
        <td className="info_container">
          <div className="info_wrap">
            <img className="mock_img" src={image} alt="mock_image" />
            <div className="info_text_wrap">
              <div
                className="product_name"
                onClick={() => this.props.history.push(`detail/${id}`)}
              >
                {title}
              </div>
              <p className="product_detail">{benefits}</p>
            </div>
          </div>
        </td>
        <td className="qty_container">
          <div className="qty_box">
            <input
              className="qty_input"
              type="number"
              value={this.state.num}
            ></input>
            <button
              className="qty_subtract"
              onClick={() => this.subtract_handler(-1)}
            >
              -
            </button>
            <button className="qty_add" onClick={() => this.add_handler(1)}>
              +
            </button>
          </div>
        </td>
        <td className="price_container">
          <span className="price">
            <span className="num">{price.toLocaleString()}</span>
            <i className="unit">원</i>
          </span>
        </td>
        <td className="selling_price_container">
          <span className="price">
            <span className="num">{sub_total.toLocaleString()}</span>
            <i className="unit">원</i>
          </span>
        </td>
        <td className="func_container">
          <div className="btn_group">
            <button className="buy_direct">바로구매</button>
            <button className="add_wish">위시리스트</button>
            <button className="remove" onClick={this.remove_item}>
              삭제
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default withRouter(BasketFeeds);
