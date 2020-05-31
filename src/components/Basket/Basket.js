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
        <main className="main_container">
          <section className="section_wrap">
            <header className="basic_header">
              <h1 className="header_text">
                장바구니
              </h1>
            </header>
            <div className="tab_container">
              <ul className="tab_wrap">
                <li className="tab">
                  <div className="tab_text">
                    일반상품&nbsp;
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
              
            </section>


          </section>
        </main>

      </div>
    )
  }
}

export default withRouter(Basket);