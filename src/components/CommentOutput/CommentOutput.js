import React, { Component } from "react";
import CommentOutputChild from "./CommentOutPutChild/CommentOutPutChild";
import "./CommentOutput.scss";

class CommentOutput extends Component {
  render() {
    return (
      <div className="commentOutput">
        {this.props.commentList.map((item, index) => {
          return (
            <CommentOutputChild
              key={index}
              commentUser={item.username}
              commentDate={item.date}
              commentScore={item.overallrate}
              commentText={item.comment}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentOutput;
