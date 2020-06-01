import React, { Component } from "react";
import "./TeaShopPage.scss";
import TeaShopList from "../../components/TeaShopList/TeaShopList";
import VideoLayer from "../../components/VideoLayer/VideoLayer";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

class TeaShopPage extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="TeaShopPage">
        <Nav />
        <VideoLayer />
        <TeaShopList history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default TeaShopPage;
