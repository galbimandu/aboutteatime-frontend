import React, { Component } from "react";
import "./CommentTap3.scss";

class CommentTap3 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="CommentTap3">
        <div className="CommentTap3Wrap">
          <img src={require(`../../images/productDesc.PNG`)} alt="sample" />
        </div>
      </div>
    );
  }
}

export default CommentTap3;
