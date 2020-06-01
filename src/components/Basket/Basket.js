import React, { Component } from "react";
import "./Basket.scss";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav"

class Basket extends Component {
  constructor() {
    super();

    this.state = {


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
              <form>
                <div className="tab_header_container">
                  <div className="order_table_wrap">
                    
                  </div>
                  <div className="notification_box">

                  </div>
                  <div className="bill">
                    
                  </div>
                </div>
                <div className="tab_footer">

                </div>
              </form>
            </section>


          </section>
        </main>

      </div>
    )
  }
}

export default withRouter(Basket);