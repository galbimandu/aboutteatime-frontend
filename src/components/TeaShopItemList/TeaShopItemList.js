import React, { Component } from "react";
import TeaShopItem from "../TeaShopItem/TeaShopItem";
import "./TeaShopItemList.scss";
import { withRouter } from "react-router-dom";
import url from "../../config";

class TeaShopItemList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };

  render() {
    const items = this.state.data.map((el, i) => {
      return <TeaShopItem data={el} />;
    });

    return <div className="TeaShopItemList">{items}</div>;
  }
}

export default withRouter(TeaShopItemList);
