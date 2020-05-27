import React, { Component } from "react";
import "./TeeShopPage.scss";
import TeeShopList from "../../components/TeeShopList/TeeShopList";

class TeeShopPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TeeShopPage">
        <TeeShopList />
      </div>
    );
  }
}

export default TeeShopPage;
