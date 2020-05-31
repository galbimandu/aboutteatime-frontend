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
            


          </section>
        </main>

      </div>
    )
  }
}

export default withRouter(Basket);