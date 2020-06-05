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

    return (
      <div className="TeaShopItemList">
        {/* <TeaShopItem history={this.props.history} data={this.state.data[0]} />
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
        <TeaShopItem history={this.props.history} data={this.state.data[11]} /> */}
        {items}
      </div>
    );
  }
}

export default withRouter(TeaShopItemList);
