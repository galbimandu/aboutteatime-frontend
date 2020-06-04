import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer";
import BasketFeeds from "../Basket/BasketFeeds/BasketFeeds"
import url from "../../config"
import "./Basket.scss";



class Basket extends Component {
  constructor() {
    super();

    this.state = {
      checkbox_all: true,
      checkbox_each: true,
      feeds_arr: [],
      price_arr: [],
      empty_feed: false,
    }
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    console.log("getData 실행")
    fetch(url + "/order/cart",
    {
      method: "GET",
      headers:
      {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DzVrBr5Gx2hj3rUgc6DWn_RoJuAVPDSeY21fOXiwTVE'
      }
    })
      .then((res) => res.json())
      .then((res) => this.setState({ feeds_arr : res.items, price_arr: res.summaries, empty_feed: true }))
  }


  checkbox_all_checked = () => {
    if (this.state.checkbox_all)
    this.setState({ checkbox_all: false, checkbox_each: false })
    else {
      this.setState({ checkbox_all: true, checkbox_each: true })
    }
  }

  checkbox_each_checked = () => {
    if (this.state.checkbox_each)
    this.setState({ checkbox_each: false, checkbox_all: false })
    else {
      this.setState({ checkbox_each: true, checkbox_all: true })
    }
  }

  total_price = () => {
    if ("total" in this.state.price_arr) {
      let str = this.state.price_arr.total
      return str.toLocaleString()
    } 
  }

  discount_price = () => {
    if ("discount" in this.state.price_arr) {
      let str = this.state.price_arr.discount
      return str.toLocaleString()
    }
  }

  bag_price = () => {
    if ("bag_price" in this.state.price_arr) {
      let str = this.state.price_arr.bag_price
      return str.toLocaleString()
    }
  }

  shipping_cost = () => {
    if ("shipping_cost" in this.state.price_arr) {
      let str = this.state.price_arr.shipping_cost
      return str.toLocaleString()
    }
  }

  final_cost = () => {
    if ("final_cost" in this.state.price_arr) {
      let str = this.state.price_arr.final_cost
      return str.toLocaleString()
    }
  }

  

  render() {

    const basket_feeds = this.state.feeds_arr.map((element, i) => {return <BasketFeeds handleData={this.getData} cart_id = {element.cart_id} id = {element.id} feeds_arr = {this.state.feeds_arr} price_arr = {this.state.price_arr} empty_feed = {this.state.empty_feed} title = {element.title} price = {element.price} image = {element.image} benefits = {element.benefits} quantity = {element.quantity} sub_total = {element.sub_total} checkbox_each={this.state.checkbox_each} checkbox_each_checked={this.checkbox_each_checked} num={this.state.num} key = {i} />})
    const {  } = this.state;

    return (
      <div className="Basket">
        <div>
          <Nav />
        </div>
        <main className="main_container">
          <section className="section_wrap">
            <header className="basic_header">
              <h1 className="header_text">
                장바구니
              </h1>
            </header>
            <div className="tab_header_container">
              <ul className="tab_header_wrap">
                <li className="tab_header">
                  <div className="tab_header_text">
                    {`일반상품 `}
                    <i className="n_wrap">
                      (
                      <b id="n">{this.state.price_arr.num_items}</b>
                      )
                    </i>
                  </div>
                </li>
              </ul>              
            </div>
            <section>
              <div className="form">
                <div className="order_table_container">
                  <div className="order_table_wrap">
                    <table className="order_table">
                      <thead>
                        <tr>
                          <th className="t_check">
                            <div className={ this.state.checkbox_all ? "checkbox_wrap_checked" : "checkbox_wrap"} onClick={ this.checkbox_all_checked }>
                              <input className="checkbox" type="checkbox"></input>
                              <span className="checkbox_custom"></span>
                            </div>
                          </th>
                          <th className="t_info">
                            상품정보
                          </th>
                          <th className="t_qty">
                            수량
                          </th>
                          <th className="t_price">
                            <div className="t_price_text">상품가격</div>
                          </th>
                          <th className="t_selling_price">
                            <div className="t_selling_price_text">판매가격</div>
                          </th>
                          <th className="t_func"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* empty_body */}
                        <tr className={ this.state.empty_feed ? "empty_body" : "empty_body_active" }>
                          <td colSpan='6'>장바구니에 담긴 상품이 없습니다.</td>
                        </tr>
                        {basket_feeds}
                      </tbody>
                    </table>
                  </div>
                  <div className="notification_box">
                    <ul className="dot_list">
                      <li className="notification">
                        장바구니에 보관된 제품은 15일 후에 삭제됩니다.
                      </li>
                    </ul>
                  </div>
                  <div className="bill_box">
                    <div className="bill_item">
                      <p className="label">상품 가격</p>
                      <p className="price">
                      <b className="num">{this.total_price()}</b>
                        <i className="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">-</i>

                    <div className="bill_item">
                      <p className="label">상품 할인</p>
                      <p className="price">
                        <b className="num">{this.discount_price()}</b>
                        <i className="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">+</i>

                    <div className="bill_item">
                      <p className="label">포장비</p>
                      <p className="price">
                        <b className="num">0</b>
                        <i className="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">+</i>

                    <div className="bill_item">
                      <p className="label">부가 쇼핑백</p>
                      <p className="price">
                        <b className="num">{this.bag_price()}</b>
                        <i className="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">+</i>

                    <div className="bill_item">
                      <p className="label">배송비</p>
                      <p className="price">
                        <b className="num">{this.shipping_cost()}</b>
                        <i className="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">=</i>

                    <div className="bill_total">
                      <p className="label">장바구니 금액</p>
                      <p className="price">
                        <b className="num">{this.final_cost()}</b>
                        <i className="unit">&nbsp;원</i>
                      </p>
                    </div>

                  </div>
                </div>
                <div className="tab_footer_container">
                  <div className="tab_footer_wrap">
                    <button className="order_checked">
                      선택상품 주문
                    </button>
                    <button className="order_all">
                      전체상품 주문
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(Basket);