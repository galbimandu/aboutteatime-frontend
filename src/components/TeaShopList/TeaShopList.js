import React, { Component } from "react";
import "./TeaShopList.scss";
import TeaShopItemList from "../TeaShopItemList/TeaShopItemList";
import TeaShopSubMenu from "../TeaShopSubMenu/TeaShopSubMenu";
import TeaShopContensTitle from "../TeaShopContensTitle/TeaShopContensTitle";
import url from "../../config";
import { withRouter } from "react-router-dom";

class TeaShopList extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
      num_pages: false,
      pick: 0,
      qs: "",
    };
  }
  componentDidMount = () => {
    // fetch("http://localhost:3000/data/itemlist.json", {})
    fetch(`${url}/item/teashop/list${this.props.location.search}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          data: response.items,
          num_pages: response.num_pages,
        });
      });
  };

  createPush = (key, value) => {
    let qs = this.props.location.search;
    console.log(qs);
    let data = {};
    if (qs) {
      qs = qs.substring(1);
      let arr = qs.split("&");
      for (let i = 0; i < arr.length; i++) {
        let arr = qs.split("&");
        let keys, values;
        [keys, values] = arr[i].split("=");
        if (keys === "pack") {
          data[keys] = [];
          let splt = values.split(",");
          for (let j = 0; j < splt.length; j++) {
            let splt = values.split(",");
            data[keys].push(splt[j]);
          }
        } else {
          data[keys] = values;
        }
      }
    }
    if (key === "pack") {
      if (!data.pack) {
        data.pack = [];
      }
      if (qs.includes(value)) {
        if (data.pack.length === 1) {
          delete data.pack;
        } else {
          let save = [...data.pack];
          data.pack = [];
          for (let i = 0; i < save.length; i++) {
            if (save[i] !== value) {
              data.pack.push(save[i]);
            }
          }
        }
      } else if (value === "all") {
        delete data.pack;
      } else {
        let tmp = [...data.pack];
        tmp.push(value);
        data.pack = tmp;
      }
    } else {
      if (key === "category") {
        data = {};
      } else if (qs.includes(value)) {
        return;
      }
      data[key] = value;
    }
    let arr = Object.entries(data);
    let pushQS = "?";
    for (let i = 0; i < arr.length; i++) {
      let keys, values;
      [keys, values] = arr[i];
      if (i !== 0) {
        pushQS += "&";
      }
      pushQS += `${keys}=${values}`;
    }
    this.setState({ data: false, qs: pushQS }, () =>
      this.props.history.push(`/teashop${pushQS}`)
    );
    document.documentElement.scrollTop = 520;
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location.search !== prevProps.location.search) {
      fetch(`${url}/item/teashop/list${this.props.location.search}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ data: res.items, num_pages: res.num_pages });
        });
    }
  };

  changeState = (key) => {};

  render() {
    let arr = [];
    for (let i = 0; i < this.state.num_pages; i++) {
      arr.push(i);
    }
    const test = arr.map((el) => {
      if (el === this.state.pick) {
        return (
          <button className="pick" id={el}>
            {el + 1}
          </button>
        );
      }
      return (
        <button
          id={el}
          onClick={() =>
            this.setState({ pick: el }, () => this.createPush("p", el))
          }
        >
          {el + 1}
        </button>
      );
    });

    return (
      <div className="teaShopList">
        <div className="teaShopListwrap">
          <TeaShopSubMenu createPush={this.createPush} />
          <div className="contents">
            <TeaShopContensTitle createPush={this.createPush} />
            {this.state.data && (
              <TeaShopItemList
                history={this.props.history}
                data={this.state.data}
              />
            )}
            <div className="buttonWrap">
              <div className="buttonPosition">
                <button className="move">&lt;&lt;</button>
                <button className="move">&lt;</button>
                <div>{this.state.data && test}</div>
                <button className="move">></button>
                <button className="move">>></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TeaShopList);
