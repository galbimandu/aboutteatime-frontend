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
      transformStay: 0,
    };
  }

  mTeaFunc() {
    if (this.state.mTea === false) {
      this.setState(
        { transformStay: 0, mTea: true, gTea: false, hTea: false, bTea: false },
        () => console.log(this.state)
      );
    }
  }

  gTeaFunc() {
    if (this.state.gTea === false) {
      this.setState(
        {
          transformStay: -490,
          mTea: false,
          gTea: true,
          hTea: false,
          bTea: false,
        },
        () => console.log(this.state)
      );
    }
  }

  hTeaFunc() {
    if (this.state.hTea === false) {
      this.setState(
        {
          transformStay: -980,
          mTea: false,
          gTea: false,
          hTea: true,
          bTea: false,
        },
        () => console.log(this.state)
      );
    }
  }

  bTeaFunc() {
    if (this.state.bTea === false) {
      this.setState(
        {
          transformStay: -1470,
          mTea: false,
          gTea: false,
          hTea: false,
          bTea: true,
        },
        () => console.log(this.state)
      );
    }
  }

  render() {
    const videoStyle = {
      transform: `translate(${this.state.transformStay}px, 0)`,
      transition: "2s",
    };
    return (
      <div className="videoLayer">
        <div className="videoLayerPlayer" style={videoStyle}>
          <div className="videoinner">
            <video controls="" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="videoinner">
            <img
              src={require("../../images/20191105112546236OO.jpg")}
              alt="kakao"
            />
          </div>
          <div className="videoinner">
            <video controls="" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="videoinner">
            <img
              src={require("../../images/20191105112617747VR.jpg")}
              alt="kakao"
            />
          </div>
          <div className="videoinner">
            <img
              src={require("../../images/20191105112617747VR.jpg")}
              alt="kakao"
            />
          </div>
        </div>
        <div className="videoBottomButtun">
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
