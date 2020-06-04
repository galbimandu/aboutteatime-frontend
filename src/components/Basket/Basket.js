import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer";
import BasketFeeds from "../Basket/BasketFeeds/BasketFeeds"
import "./Basket.scss";
import mock_image from "../../images/mock_image.png";

class Basket extends Component {
  constructor() {
    super();

    this.state = {
      checkbox_all: true,
      checkbox_each: true,
    }
  }

  checkbox_all_checked = () => {
    if (this.state.checkbox_all)
    this.setState({ checkbox_all: false })
    else {
      this.setState({ checkbox_all: true })
    }
  }

  checkbox_each_checked = () => {
    if (this.state.checkbox_each)
    this.setState({ checkbox_each: false })
    else {
      this.setState({ checkbox_each: true })
    }
  }

  render() {
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
                      <b id="n">0</b>
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
                        <tr className="empty_body">
                          <td>장바구니에 담긴 상품이 없습니다.</td>
                        </tr>
                          <BasketFeeds checkbox_each={this.state.checkbox_each} checkbox_each_checked={this.checkbox_each_checked}/>
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
                      <p class="price">
                        <b class="num">0</b>
                        <i class="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">-</i>

                    <div className="bill_item">
                      <p className="label">상품 할인</p>
                      <p class="price">
                        <b class="num">0</b>
                        <i class="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">+</i>

                    <div className="bill_item">
                      <p className="label">포장비</p>
                      <p class="price">
                        <b class="num">0</b>
                        <i class="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">+</i>

                    <div className="bill_item">
                      <p className="label">부가 쇼핑백</p>
                      <p class="price">
                        <b class="num">0</b>
                        <i class="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">+</i>

                    <div className="bill_item">
                      <p className="label">배송비</p>
                      <p class="price">
                        <b class="num">0</b>
                        <i class="unit">&nbsp;원</i>
                      </p>
                    </div>
                    <i className="mark">=</i>

                    <div className="bill_total">
                      <p className="label">장바구니 금액</p>
                      <p class="price">
                        <b class="num">0</b>
                        <i class="unit">&nbsp;원</i>
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