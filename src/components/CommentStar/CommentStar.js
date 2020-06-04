import React, { Component } from "react";
import "./CommentStar.scss";

class CommentStar extends Component {
  constructor() {
    super();

    this.state = {
      tip: false,
    };
  }

  render() {
    const starColor = {
      width: `${this.props.score * 20}%`,
    };
    return (
      <div className="commentScore">
        <div className="tipWrap">
          <div className={this.state.tip ? "tip tipOn" : "tip tipOff"}>
            <span>별을 눌러 평점을 남겨주세요 ↓ ↓ </span>
          </div>
        </div>
        <div className="starWrap">
          <div
            className="star"
            onMouseEnter={() => this.setState({ tip: true })}
            onMouseLeave={() => this.setState({ tip: false })}
          >
            <div
              className={
                this.state.tip ? "scoreText scoreTextAction" : "scoreText"
              }
            >
              <span>{this.props.score}</span>
            </div>
            <div className="selector">
              <div className="selectorChild">
                <div
                  className="score 1p"
                  onClick={() => this.props.scoreHandler(0.5)}
                ></div>
                <div
                  className="score 2p"
                  onClick={() => this.props.scoreHandler(1)}
                ></div>
                <div
                  className="score 3p"
                  onClick={() => this.props.scoreHandler(1.5)}
                ></div>
                <div
                  className="score 4p"
                  onClick={() => this.props.scoreHandler(2)}
                ></div>
                <div
                  className="score 5p"
                  onClick={() => this.props.scoreHandler(2.5)}
                ></div>
                <div
                  className="score 6p"
                  onClick={() => this.props.scoreHandler(3)}
                ></div>
                <div
                  className="score 7p"
                  onClick={() => this.props.scoreHandler(3.5)}
                ></div>
                <div
                  className="score 8p"
                  onClick={() => this.props.scoreHandler(4)}
                ></div>
                <div
                  className="score 9p"
                  onClick={() => this.props.scoreHandler(4.5)}
                ></div>
                <div
                  className="score 10p"
                  onClick={() => this.props.scoreHandler(5)}
                ></div>
              </div>
              <div className="backgroundStar"></div>
              <div className="movingStar" style={starColor}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentStar;
