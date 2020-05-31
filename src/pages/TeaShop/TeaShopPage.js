import React, { Component } from "react";
import "./TeaShopPage.scss";
import TeaShopList from "../../components/TeaShopList/TeaShopList";
import VideoLayer from "../../components/VideoLayer/VideoLayer";
import Nav from "../../components/Nav/Nav";

class TeaShopPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="TeaShopPage">
        <Nav />
        <VideoLayer />
        <TeaShopList />
      </div>
    );
  }
}

export default TeaShopPage;
