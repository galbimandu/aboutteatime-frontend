import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import url from "../../../config"
import "./BasketFeeds.scss";

class BasketFeeds extends Component {
  constructor() {
    super();
    
    this.state = {
      num: 0,
      remove_item: false,
    }
  }

  componentDidMount = () => {
    this.setState({ num: this.props.quantity })
    console.log(this.props.match)
    fetch(
      `${url}/order/cart/${this.props.match.params.id}`,
      {
        method: "GET",
        headers: {
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DzVrBr5Gx2hj3rUgc6DWn_RoJuAVPDSeY21fOXiwTVE'
        }
      }
    )
    .then(res => res.json())
    .then(res => console.log(res))
  }


  // componentDidUpdate(prevProps) {
  //   console.log("prevProps:: ", prevProps.quantity);
  //   console.log("this.props:: ", this.state.num);

  //   if (prevProps.quantity !== this.state.num) {
  //     fetch(url + "/order/cart",
  //     {
  //       method: "GET",
  //       headers:
  //       {
  //         'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DzVrBr5Gx2hj3rUgc6DWn_RoJuAVPDSeY21fOXiwTVE'
  //       }
  //     })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //   }
  // }

  btn_handler = (number) => {
    // const token = localStorage.getItem("token")
    fetch(url + "/order/cart",
    {
      method: "PATCH",
      headers:
      {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DzVrBr5Gx2hj3rUgc6DWn_RoJuAVPDSeY21fOXiwTVE'
      },
      body: JSON.stringify
      (
        {
          cart_id: this.props.cart_id,
          delta: number
        }
      )
    })
    .then( res => {
      if (res.status === 200) {
        this.props.handleData();
        // fetch(url + "/order/cart",
        // {
        //   method: "GET",
        //   headers:
        //   {
        //     'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DzVrBr5Gx2hj3rUgc6DWn_RoJuAVPDSeY21fOXiwTVE'
        //   }
        // })
        //   .then((res) => res.json())
        //   .then((res) => console.log(res))
      }
    })
  }

  add_handler = (number) => {
    this.btn_handler(number)
    this.setState({ num : this.state.num + number })
  }

  subtract_handler = (number) => {
    console.log(number)
    this.btn_handler(number)
    if (this.state.num === 1 ) {
      return;
    } else if ( this.state.num > 1 ) {
      this.setState({ num : this.state.num + number })
    }
  }

  remove_item = () => {
    fetch(`${url}/order/cart`,
    {
      method: "DELETE",
      headers:
      {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DzVrBr5Gx2hj3rUgc6DWn_RoJuAVPDSeY21fOXiwTVE'
      },
      body: JSON.stringify
      (
        {
          cart_id: this.props.cart_id
        }
      )
    })
    .then( res => {
      if (res.status === 200) {
        this.props.handleData();
      }})
  }

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
            <img className="mock_img" src={this.props.image} alt="mock_image" />
            <div className="info_text_wrap">
              <Link to = {`/detail/${this.props.item_id}`}>
              <div className="product_name">{this.props.title}</div>
              </Link>
              <p className="product_detail">{this.props.benefits}</p>
            </div>
          </div>
        </td>
        <td className="qty_container">
          <div className="qty_box">
            <input className="qty_input" type="number" value={this.state.num}></input>
            <button className="qty_subtract" onClick={() => this.subtract_handler(-1)} >-</button>
            <button className="qty_add" onClick={() => this.add_handler(1)}>+</button>
          </div>
        </td>
        <td className="price_container">
          <span className="price">
            <span className="num">{this.props.price.toLocaleString()}</span>
            <i className="unit">원</i>
          </span>
        </td>
        <td className="selling_price_container">
          <span className="price">
            <span className="num">{this.props.sub_total.toLocaleString()}</span>
            <i className="unit">원</i>
          </span>
        </td>
        <td className="func_container">
          <div className="btn_group">
            <button className="buy_direct">바로구매</button>
            <button className="add_wish">위시리스트</button>
            <button className="remove" onClick={this.remove_item}>삭제</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default withRouter(BasketFeeds);