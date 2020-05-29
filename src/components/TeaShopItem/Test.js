import React, { Component } from "react";
import TeaShopItem from "./TeaShopItem";
import url from "../../config";

class Test extends Component {
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
    console.log(this.state.data[0]);
    return (
      <>
        <TeaShopItem data={this.state.data[1]} />
      </>
    );
  }
}

export default Test;
