import React, { Component } from "react";
import "./TeaShopPage.scss";
import TeaShopList from "../../components/TeaShopList/TeaShopList";

class TeaShopPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TeaShopPage">
        <TeaShopList />
      </div>
    );
  }
}

export default TeaShopPage;
