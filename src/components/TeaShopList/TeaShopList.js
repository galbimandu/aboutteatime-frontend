import React, { Component } from "react";
import "./TeaShopList.scss";
import { Link } from "react-router-dom";

class TeaShopList extends Component {
  constructor() {
    super();

    this.state = {
      review: false,
      sale: false,
      new: false,
      high: false,
      row: false,
      teaOn: false,
      teaFoodOn: false,
      themaOn: false,
      categoryAll: false,
      categoryLeaf: false,
      categoryPyramid: false,
      categoryTeabag: false,
      categoryPowder: false,
    };
  }

  reviewSortFunc() {
    if (this.state.review === false) {
      this.setState(
        { review: true, sale: false, new: false, high: false, row: false },
        () => console.log(this.state)
      );
    }
  }

  saleSortFunc() {
    if (this.state.sale === false) {
      this.setState(
        { review: false, sale: true, new: false, high: false, row: false },
        () => console.log(this.state)
      );
    }
  }

  newSortFunc() {
    if (this.state.new === false) {
      this.setState(
        { review: false, sale: false, new: true, high: false, row: false },
        () => console.log(this.state)
      );
    }
  }

  highSortFunc() {
    if (this.state.high === false) {
      this.setState(
        { review: false, sale: false, new: false, high: true, row: false },
        () => console.log(this.state)
      );
    }
  }

  rowSortFunc() {
    if (this.state.row === false) {
      this.setState(
        { review: false, sale: false, new: false, high: false, row: true },
        () => console.log(this.state)
      );
    }
  }

  teaOnFunc() {
    this.setState({ teaOn: true });
  }

  teaOffFunc() {
    this.setState({ teaOn: false });
  }

  teaFoodOnFunc() {
    this.setState({ teaFoodOn: true });
  }

  teaFoodOffFunc() {
    this.setState({ teaFoodOn: false });
  }

  themaOnFunc() {
    this.setState({ themaOn: true });
  }

  themaOffFunc() {
    this.setState({ themaOn: false });
  }

  categoryAll() {
    if (this.state.categoryAll === false) {
      this.setState({
        categoryAll: true,
        categoryLeaf: false,
        categoryPyramid: false,
        categoryTeabag: false,
        categoryPowder: false,
      });
    }
  }

  categoryLeaf() {
    if (this.state.categoryLeaf === false) {
      this.setState(
        {
          categoryAll: false,
          categoryLeaf: true,
        },
        () => console.log(this.state.categoryLeaf)
      );
    } else {
      this.setState(
        {
          categoryLeaf: false,
        },
        () => console.log(this.state.categoryLeaf)
      );
    }
  }

  categoryPyramid() {
    if (this.state.categoryPyramid === false) {
      this.setState(
        {
          categoryAll: false,
          categoryPyramid: true,
        },
        () => console.log(this.state.categoryPyramid)
      );
    } else {
      this.setState(
        {
          categoryPyramid: false,
        },
        () => console.log(this.state.categoryPyramid)
      );
    }
  }

  categoryTeabag() {
    if (this.state.categoryTeabag === false) {
      this.setState(
        {
          categoryAll: false,
          categoryTeabag: true,
        },
        () => console.log(this.state.categoryTeabag)
      );
    } else {
      this.setState(
        {
          categoryTeabag: false,
        },
        () => console.log(this.state.categoryTeabag)
      );
    }
  }

  categoryPowder() {
    if (this.state.categoryPowder === false) {
      this.setState(
        {
          categoryAll: false,
          categoryPowder: true,
        },
        () => console.log(this.state.categoryPowder)
      );
    } else {
      this.setState(
        {
          categoryPowder: false,
        },
        () => console.log(this.state.categoryPowder)
      );
    }
  }

  render() {
    return (
      <div className="teaShopList">
        <div className="teaShopListwrap">
          <div className="subMenu">
            <div className="subMenuTitle">
              <span>TEA SHOP</span>
            </div>
            <div className="subMenuList">
              <div className="subMenuListinner">
                <li
                  onMouseOver={this.teaOnFunc.bind(this)}
                  onMouseLeave={this.teaOffFunc.bind(this)}
                >
                  Tea
                  <div
                    className={
                      this.state.teaOn
                        ? "hiddenDiv hiddenOn"
                        : "hiddenDiv hiddenOff"
                    }
                  >
                    <img
                      src={require("../../images/ico_subMenu.png")}
                      alt="ico_subMenu"
                    />
                    <div className="hididinDivInner">
                      <ul>
                        <li>
                          <Link to="/">전체상품</Link>
                        </li>
                        <li>
                          <Link to="/">명차</Link>
                        </li>
                        <li>
                          <Link to="/">녹차/발효차/홍차</Link>
                        </li>
                        <li>
                          <Link to="/">허브차(무카페인)</Link>
                        </li>
                        <li>
                          <Link to="/">블렌디드티</Link>
                        </li>
                        <li>
                          <Link to="/">웰니스티</Link>
                        </li>
                        <li>
                          <Link to="/">파우더</Link>
                        </li>
                        <li>
                          <Link to="/">세트</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  onMouseOver={this.teaFoodOnFunc.bind(this)}
                  onMouseLeave={this.teaFoodOffFunc.bind(this)}
                >
                  Tea Food
                  <div
                    className={
                      this.state.teaFoodOn
                        ? "hiddenDiv hiddenOn"
                        : "hiddenDiv hiddenOff"
                    }
                  >
                    <img
                      src={require("../../images/ico_subMenu.png")}
                      alt="ico_subMenu"
                    />
                    <div className="hididinDivInner">
                      <ul>
                        <li>
                          <Link to="/">전체상품</Link>
                        </li>
                        <li>
                          <Link to="/">베이커리</Link>
                        </li>
                        <li>
                          <Link to="/">초콜릿/잼</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  onMouseOver={this.themaOnFunc.bind(this)}
                  onMouseLeave={this.themaOffFunc.bind(this)}
                >
                  테마샵
                  <div
                    className={
                      this.state.themaOn
                        ? "hiddenDiv hiddenOn"
                        : "hiddenDiv hiddenOff"
                    }
                  >
                    <img
                      src={require("../../images/ico_subMenu.png")}
                      alt="ico_subMenu"
                    />
                    <div className="hididinDivInner">
                      <ul>
                        <li>
                          <Link to="/">전체상품</Link>
                        </li>
                        <li>
                          <Link to="/">기프트몰</Link>
                        </li>
                        <li>
                          <Link to="/">라이프스타일몰</Link>
                        </li>
                        <li>
                          <Link to="/">오피스몰</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="cotentsTitle">
              <div className="cotentsTitleTop">
                <span>TEA SHOP</span>
                <div className="cotentsTitleTopRight">
                  <li
                    className={this.state.review ? "choiceSpan" : ""}
                    name="review"
                    onClick={this.reviewSortFunc.bind(this)}
                  >
                    리뷰많은순
                  </li>
                  <li
                    className={this.state.sale ? "choiceSpan" : ""}
                    name="sale"
                    onClick={this.saleSortFunc.bind(this)}
                  >
                    판매순
                  </li>
                  <li
                    className={this.state.new ? "choiceSpan" : ""}
                    name="new"
                    onClick={this.newSortFunc.bind(this)}
                  >
                    신상품순
                  </li>
                  <li
                    className={this.state.high ? "choiceSpan" : ""}
                    name="high"
                    onClick={this.highSortFunc.bind(this)}
                  >
                    높은 가격순
                  </li>
                  <li
                    className={this.state.row ? "choiceSpan" : ""}
                    name="row"
                    onClick={this.rowSortFunc.bind(this)}
                  >
                    낮은 가격순
                  </li>
                </div>
              </div>
              <div className="cotentsTitleBottom">
                <div className="cotentsTitleBottomLeft">
                  <span>총 220개의 상품이 있습니다.</span>
                </div>
                <div className="cotentsTitleBottomRight">
                  <li
                    className={
                      this.state.categoryAll ? "categoryOn" : "categoryOff"
                    }
                    name="categoryAll"
                    onClick={this.categoryAll.bind(this)}
                  >
                    <span>전체</span>
                  </li>
                  <li
                    className={
                      this.state.categoryLeaf ? "categoryOn" : "categoryOff"
                    }
                    name="categoryLeaf"
                    onClick={this.categoryLeaf.bind(this)}
                  >
                    <span>잎차</span>
                  </li>
                  <li
                    className={
                      this.state.categoryPyramid ? "categoryOn" : "categoryOff"
                    }
                    name="categoryPyramid"
                    onClick={this.categoryPyramid.bind(this)}
                  >
                    <span>피라미드</span>
                  </li>
                  <li
                    className={
                      this.state.categoryTeabag ? "categoryOn" : "categoryOff"
                    }
                    name="categoryTeabag"
                    onClick={this.categoryTeabag.bind(this)}
                  >
                    <span>티백</span>
                  </li>
                  <li
                    className={
                      this.state.categoryPowder ? "categoryOn" : "categoryOff"
                    }
                    name="categoryPowder"
                    onClick={this.categoryPowder.bind(this)}
                  >
                    <span>파우더</span>
                  </li>
                </div>
              </div>
            </div>
            <div className="goodsList">
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
              <div className="testDiv">1test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaShopList;
