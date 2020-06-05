import React, { Component } from "react";
import "./CommentOutputChild.scss";

class CommentOutputChild extends Component {
  render() {
    const starColor = {
      width: `${100 - this.props.commentScore * 20}%`,
    };
    return (
      <div className="commentOutputChild">
        <div className="commentOutputChildWrap">
          <div className="commentOutputChildLeft">
            <span>{this.props.commentDate}</span>
            <div className="starScore">
              <div className="background"></div>
              <div className="starSize" style={starColor}></div>
            </div>
          </div>
          <div className="commentOutputChildRigth">
            <span className="user">
              <b>구매자</b>
              {this.props.commentUser}
            </span>
            <span className="text">{this.props.commentText}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentOutputChild;
