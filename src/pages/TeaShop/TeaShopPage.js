import React, { Component } from "react";
import "./TeaShopPage.scss";
import TeeShopList from "../../components/TeaShopList/TeaShopList";

class TeaShopPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TeaShopPage">
        <TeeShopList />
      </div>
    );
  }
}

export default TeaShopPage;
