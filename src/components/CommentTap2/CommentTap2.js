import React, { Component } from "react";
import "./CommentTap2.scss";
import url from "../../config";
import CommentStar from "../CommentStar/CommentStar";

class CommentTap2 extends Component {
  constructor() {
    super();

    this.state = {
      comment: [
        {
          commentUser: "1",
          commentDate: "1",
          commentScore: "1",
          commentText: "1",
        },
        {
          commentUser: "2",
          commentDate: "2",
          commentScore: "2",
          commentText: "2",
        },
      ],

      score: 0.5,
      inputText: "",
    };
  }

  componentDidMount() {
    // this.firstGetFunc.bind(this);
  }

  firstGetFunc() {
    const token = localStorage.getItem("token");
    fetch(`http://${url}:8000/user/sign-in`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  }

  clickToGoFunc() {
    console.log("보냈다");
  }

  // 댓글 별점핸들러 //
  scoreHandler(input) {
    this.setState({ score: input });
  }

  // 댓글 텍스트핸들러 //
  textHandler(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="CommentTap2">
        <div className="outputZone">이미 적힌 댓글 출력용</div>
        <div className="inputZone">
          <div className="inputZoneLeft">
            <CommentStar
              score={this.state.score}
              scoreHandler={this.scoreHandler.bind(this)}
            />
          </div>
          <div className="inputZoneRight">
            <div className="inputBoxInner">
              <input type="text" onChange={this.textHandler.bind(this)} />
              <button onClick={this.clickToGoFunc.bind(this)}>
                <span>확인</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentTap2;
