import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Tap1 from "../CommentTap1/CommentTap1";
import Tap2 from "../CommentTap2/CommentTap2";
import Tap3 from "../CommentTap3/CommentTap3";
import url from "../../config";
import "./Comment.scss";

class Comment extends Component {
  state = {
    tapInx: 2,
    commentList: [],
  };

  componentDidMount() {
    this.getFunc();
  }

  getFunc() {
    const token = localStorage.getItem("token");
    fetch(`${url}/review/?id=1`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((res) => this.setState({ commentList: res.reviews }));
  }

  render() {
    const TapObj = {
      1: <Tap1 />,
      2: (
        <Tap2
          commentList={this.state.commentList}
          getFunc={this.getFunc.bind(this)}
          id={this.props.match.params.id}
        />
      ),
      3: <Tap3 />,
    };
    const { tapInx, commentList } = this.state;
    return (
      <div className="commentCotentsTitle">
        <div className="title">
          <div className="titleInner">
            <li
              className={tapInx === 1 ? "choiceSpan" : ""}
              onClick={() => this.setState({ tapInx: 1 })}
            >
              제품상세
            </li>
            <li
              className={tapInx === 2 ? "choiceSpan" : ""}
              onClick={() => this.setState({ tapInx: 2 })}
            >
              고객리뷰
              <b>{commentList.length}개</b>
            </li>
            <li
              className={tapInx === 3 ? "choiceSpan" : ""}
              onClick={() => this.setState({ tapInx: 3 })}
            >
              제품고시정보
            </li>
          </div>
        </div>
        <div className="activeTap">{TapObj[tapInx]}</div>
      </div>
    );
  }
}

export default withRouter(Comment);
