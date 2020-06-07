import React, { Component } from "react";
import "./CommentTap2.scss";
import url from "../../config";
import CommentStar from "../CommentStar/CommentStar";
import CommentOutput from "../CommentOutput/CommentOutput";
import { withRouter } from "react-router-dom";

class CommentTap2 extends Component {
  constructor() {
    super();

    this.state = {
      score: 0.5,
      inputText: "",
      validate: false,
    };
  }

  fectFunc() {
    const token = localStorage.getItem("token");
    fetch(`${url}/review/`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        overall_rating: this.state.score,
        content: this.state.inputText,
        item_id: 1,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.setState({ inputText: "", score: 0.5, validate: false }, () =>
          this.props.getFunc()
        );
      }
    });
  }

  validateFunc() {
    if (this.state.inputText.length > 0) {
      this.setState({ validate: true });
    } else {
      this.setState({ validate: false });
    }
  }

  goBeforeFectFunc() {
    if (this.state.validate) {
      this.fectFunc();
    } else {
      alert("내용을 입력해주세요.");
    }
  }

  enterToGoFunc(input) {
    if (input.keyCode === 13) {
      this.goBeforeFectFunc();
    }
  }

  render() {
    return (
      <div className="CommentTap2">
        <div className="outputZone">
          <div className="outputZoneWrap">
            <CommentOutput commentList={this.props.commentList} />
          </div>
        </div>
        <div className="inputZone">
          <div className="inputZoneLeft">
            <CommentStar
              score={this.state.score}
              scoreHandler={(input) => this.setState({ score: input })}
            />
          </div>
          <div className="inputZoneRight">
            <div
              className="inputBoxInner"
              onKeyDown={this.enterToGoFunc.bind(this)}
            >
              <input
                type="text"
                onChange={(input) =>
                  this.setState({ inputText: input.target.value }, () =>
                    this.validateFunc()
                  )
                }
                value={this.state.inputText}
              />
              <button onClick={this.goBeforeFectFunc.bind(this)}>
                <span className={this.state.validate ? "validate" : ""}>
                  확인
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentTap2);
