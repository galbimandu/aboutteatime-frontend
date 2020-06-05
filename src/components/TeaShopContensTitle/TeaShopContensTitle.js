import React, { Component } from "react";
import "./TeaShopContensTitle.scss";

class TeaShopContensTitle extends Component {
  constructor() {
    super();

    this.state = {
      review: true,
      sale: false,
      new: false,
      high: false,
      row: false,
      categoryAll: true,
      categoryLeaf: false,
      categoryPyramid: false,
      categoryTeabag: false,
      categoryPowder: false,
    };
  }

  reviewSortFunc() {
    if (this.state.review === false) {
      this.setState({
        review: true,
        sale: false,
        new: false,
        high: false,
        row: false,
      });
    }
    this.props.createPush("sort", "review");
  }

  saleSortFunc() {
    if (this.state.sale === false) {
      this.setState({
        review: false,
        sale: true,
        new: false,
        high: false,
        row: false,
      });
    }
    this.props.createPush("sort", "popular");
  }

  newSortFunc() {
    if (this.state.new === false) {
      this.setState({
        review: false,
        sale: false,
        new: true,
        high: false,
        row: false,
      });
    }
    this.props.createPush("sort", "new_arrival");
  }

  highSortFunc() {
    if (this.state.high === false) {
      this.setState({
        review: false,
        sale: false,
        new: false,
        high: true,
        row: false,
      });
    }
    this.props.createPush("sort", "price_desc");
  }

  rowSortFunc() {
    if (this.state.row === false) {
      this.setState({
        review: false,
        sale: false,
        new: false,
        high: false,
        row: true,
      });
    }
    this.props.createPush("sort", "price_asc");
  }

  categoryAll() {
    if (this.state.categoryAll === false) {
      this.setState({
        categoryAll: true,
        categoryLeaf: false,
        categoryPyramid: false,
        categoryTeabag: false,
        categoryPowder: false,
        scrollTop: 0,
      });
    }
    this.props.createPush("pack", "all");
  }

  categoryLeaf() {
    if (this.state.categoryLeaf === false) {
      this.setState({
        categoryAll: false,
        categoryLeaf: true,
      });
    } else {
      this.setState({
        categoryLeaf: false,
      });
    }
    this.props.createPush("pack", "잎차");
  }

  categoryPyramid() {
    if (this.state.categoryPyramid === false) {
      this.setState({
        categoryAll: false,
        categoryPyramid: true,
      });
    } else {
      this.setState({
        categoryPyramid: false,
      });
    }
    this.props.createPush("pack", "피라미드");
  }

  categoryTeabag() {
    if (this.state.categoryTeabag === false) {
      this.setState({
        categoryAll: false,
        categoryTeabag: true,
      });
    } else {
      this.setState({
        categoryTeabag: false,
      });
    }
    this.props.createPush("pack", "티백");
  }

  categoryPowder() {
    if (this.state.categoryPowder === false) {
      this.setState({
        categoryAll: false,
        categoryPowder: true,
      });
    } else {
      this.setState({
        categoryPowder: false,
      });
    }
    this.props.createPush("pack", "파우더");
  }

  render() {
    return (
      <div className="teaShopCotentsTitle">
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
              className={this.state.categoryAll ? "categoryOn" : "categoryOff"}
              name="categoryAll"
              onClick={this.categoryAll.bind(this)}
            >
              <span>전체</span>
            </li>
            <li
              className={this.state.categoryLeaf ? "categoryOn" : "categoryOff"}
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
    );
  }
}

export default TeaShopContensTitle;
