import React, { Component } from "react";
import Tap1 from "../CommentTap1/CommentTap1";
import Tap2 from "../CommentTap2/CommentTap2";
import Tap3 from "../CommentTap3/CommentTap3";
import "./Comment.scss";

const Tap = {
  0: <Tap1 />,
  1: <Tap2 />,
  2: <Tap3 />,
};

class Comment extends Component {
  constructor() {
    super();

    this.state = {
      review: false,
      sale: true,
      new: false,
      tapInx: 1,
    };
  }

  reviewSortFunc() {
    if (this.state.review === false) {
      this.setState({
        review: true,
        sale: false,
        new: false,
        tapInx: 0,
      });
    }
  }

  saleSortFunc() {
    if (this.state.sale === false) {
      this.setState({
        review: false,
        sale: true,
        new: false,
        tapInx: 1,
      });
    }
  }

  newSortFunc() {
    if (this.state.new === false) {
      this.setState({
        review: false,
        sale: false,
        new: true,
        tapInx: 2,
      });
    }
  }

  render() {
    return (
      <div className="commentCotentsTitle">
        <div className="title">
          <div className="titleInner">
            <li
              className={this.state.review ? "choiceSpan" : ""}
              name="review"
              onClick={this.reviewSortFunc.bind(this)}
            >
              제품상세
            </li>
            <li
              className={this.state.sale ? "choiceSpan" : ""}
              name="sale"
              onClick={this.saleSortFunc.bind(this)}
            >
              고객리뷰 <b>559개</b>
            </li>
            <li
              className={this.state.new ? "choiceSpan" : ""}
              name="new"
              onClick={this.newSortFunc.bind(this)}
            >
              제품고시정보
            </li>
          </div>
        </div>
        <div className="activeTap">{Tap[this.state.tapInx]}</div>
      </div>
    );
  }
}

export default Comment;
