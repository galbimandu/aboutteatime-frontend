import React, { Component } from "react";
import "./VideoLayer.scss";
import video from "../../media/teashop_4.mp4";

class VideoLayer extends Component {
  constructor() {
    super();

    this.state = {
      mTea: false,
      gTea: false,
      hTea: false,
      bTea: false,
    };
  }

  mTeaFunc() {
    if (this.state.mTea === false) {
      this.setState({ mTea: true, gTea: false, hTea: false, bTea: false }, () =>
        console.log(this.state)
      );
    }
  }

  gTeaFunc() {
    if (this.state.gTea === false) {
      this.setState({ mTea: false, gTea: true, hTea: false, bTea: false }, () =>
        console.log(this.state)
      );
    }
  }

  hTeaFunc() {
    if (this.state.hTea === false) {
      this.setState({ mTea: false, gTea: false, hTea: true, bTea: false }, () =>
        console.log(this.state)
      );
    }
  }

  bTeaFunc() {
    if (this.state.bTea === false) {
      this.setState({ mTea: false, gTea: false, hTea: false, bTea: true }, () =>
        console.log(this.state)
      );
    }
  }

  render() {
    return (
      <div className="videoLayer">
        <div className="videoLayerPlayer">
          <div className="videoinner video1">
            <img
              src={require("../../images/20191105112546236OO.jpg")}
              alt="kakao"
            />
          </div>
          <div className="videoinner video2">
            <video controls="" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="videoinner video3">
            <img
              src={require("../../images/20191105112617747VR.jpg")}
              alt="kakao"
            />
          </div>
        </div>
        <div className="videoCover">
          <ul>
            <li
              onClick={this.mTeaFunc.bind(this)}
              className={this.state.mTea ? "activate" : ""}
            >
              명차
            </li>
            <li
              onClick={this.gTeaFunc.bind(this)}
              className={this.state.gTea ? "activate" : ""}
            >
              녹차/발효차/홍차
            </li>
            <li
              onClick={this.hTeaFunc.bind(this)}
              className={this.state.hTea ? "activate" : ""}
            >
              허브티(무카페인)
            </li>
            <li
              onClick={this.bTeaFunc.bind(this)}
              className={this.state.bTea ? "activate" : ""}
            >
              블렌디드티
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default VideoLayer;
