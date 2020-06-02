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
    fetch(url + "/data/TeaItem.json", {})
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.data });
      });
  };

  render() {
    return (
      <div className="TeaShopItemList">
        <TeaShopItem history={this.props.history} data={this.state.data[0]} />
        <TeaShopItem history={this.props.history} data={this.state.data[1]} />
        <TeaShopItem history={this.props.history} data={this.state.data[2]} />
        <TeaShopItem history={this.props.history} data={this.state.data[3]} />
        <TeaShopItem history={this.props.history} data={this.state.data[1]} />
        <TeaShopItem history={this.props.history} data={this.state.data[0]} />
        <TeaShopItem history={this.props.history} data={this.state.data[2]} />
        <TeaShopItem history={this.props.history} data={this.state.data[3]} />
        <TeaShopItem history={this.props.history} data={this.state.data[0]} />
        <TeaShopItem history={this.props.history} data={this.state.data[2]} />
        <TeaShopItem history={this.props.history} data={this.state.data[1]} />
        <TeaShopItem history={this.props.history} data={this.state.data[2]} />
      </div>
    );
  }
}

export default TeaShopItemList;
