import React, { Component } from "react";
import "./CommentTap1.scss";

class CommentTap1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="CommentTap1">
        <div className="CommentTap1Wrap">
          <img src={require(`../../images/18_img03_pc.jpg`)} alt="sample" />
        </div>
      </div>
    );
  }
}

export default CommentTap1;
