import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Footer from "../../components/Footer/Footer";
import "./ItemDetailPage.scss";
class ItemDetailPage extends Component {
  render() {
    return (
      <div className="ItemDetailPage">
        <Nav />
        <ItemDetail className="ItemDetail" />
        <Footer className="Footer" />
      </div>
    );
  }
}

export default ItemDetailPage;
