import React, { Component } from "react";
import TeaShopItem from "../TeaShopItem/TeaShopItem";
import "./TeaShopItemList.scss";
import url from "../../config";

class TeaShopItemList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    //fetch(`${url}item/teashop/list`, {})
    fetch("http://localhost:3000/data/itemlist.json", {})
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.items });
      });
  };

  render() {
    console.log(this.state.data[0]);
    return (
      <div className="TeaShopItemList">
        <TeaShopItem history={this.props.history} data={this.state.data[0]} />
        <TeaShopItem history={this.props.history} data={this.state.data[1]} />
        <TeaShopItem history={this.props.history} data={this.state.data[2]} />
        <TeaShopItem history={this.props.history} data={this.state.data[3]} />
        <TeaShopItem history={this.props.history} data={this.state.data[4]} />
        <TeaShopItem history={this.props.history} data={this.state.data[5]} />
        <TeaShopItem history={this.props.history} data={this.state.data[6]} />
        <TeaShopItem history={this.props.history} data={this.state.data[7]} />
        <TeaShopItem history={this.props.history} data={this.state.data[8]} />
        <TeaShopItem history={this.props.history} data={this.state.data[9]} />
        <TeaShopItem history={this.props.history} data={this.state.data[10]} />
        <TeaShopItem history={this.props.history} data={this.state.data[11]} />
      </div>
    );
  }
}

export default TeaShopItemList;
