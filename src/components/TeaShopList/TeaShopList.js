import React, { Component } from "react";
import "./TeaShopList.scss";
import TeaShopItemList from "../TeaShopItemList/TeaShopItemList";
import TeaShopSubMenu from "../TeaShopSubMenu/TeaShopSubMenu";
import TeaShopGoTopButton from "../TeaShopGoTopButton/TeaShopGoTopButton";
import TeaShopContensTitle from "../TeaShopContensTitle/TeaShopContensTitle";

class TeaShopList extends Component {
  render() {
    return (
      <div className="teaShopList">
        <div className="teaShopListwrap">
          <TeaShopSubMenu />
          <div className="contents">
            <TeaShopContensTitle />
            <TeaShopItemList />
          </div>
        </div>
        <TeaShopGoTopButton />
      </div>
    );
  }
}

export default TeaShopList;
