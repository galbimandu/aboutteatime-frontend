import React, { Component } from "react";
import NavMove from "../../components/NavMove/NavMove";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Footer from "../../components/Footer/Footer";
import "./ItemDetailPage.scss";
import TopGoButton from "../../components/TopGoButton/TopGoButton";
class ItemDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      navMoving: false,
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="ItemDetailPage">
        <NavMove />
        <div
          className={
            this.state.navMoving
              ? "contents contentsOn"
              : "contents contentsOff"
          }
        >
          <ItemDetail className="ItemDetail" />
          <Footer className="Footer" />
        </div>
        <TopGoButton />
      </div>
    );
  }
}

export default ItemDetailPage;
