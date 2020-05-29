import React, { Component } from "react";
import "./VideoLayer.scss";
import mTeaVideo from "../../media/mTea.mp4";
import gTeaVideo from "../../media/gTea.mp4";
import hTeaVideo from "../../media/hTea.mp4";
import bTeaVideo from "../../media/bTea.mp4";
import { Link } from "react-router-dom";

class VideoLayer extends Component {
  constructor() {
    super();

    this.state = {
      mTea: true,
      gTea: false,
      hTea: false,
      bTea: false,
      transformStay: 0,
      autoPlayIndex: 2,
    };
  }

  mTeaFunc() {
    if (this.state.mTea === false) {
      this.setState(
        {
          transformStay: 0,
          mTea: true,
          gTea: false,
          hTea: false,
          bTea: false,
          autoPlayIndex: 2,
        },
        () => console.log(this.state)
      );
    }
  }

  gTeaFunc() {
    if (this.state.gTea === false) {
      this.setState(
        {
          transformStay: -870,
          mTea: false,
          gTea: true,
          hTea: false,
          bTea: false,
          autoPlayIndex: 3,
        },
        () => console.log(this.state)
      );
    }
  }

  hTeaFunc() {
    if (this.state.hTea === false) {
      this.setState(
        {
          transformStay: -1740,
          mTea: false,
          gTea: false,
          hTea: true,
          bTea: false,
          autoPlayIndex: 4,
        },
        () => console.log(this.state)
      );
    }
  }

  bTeaFunc() {
    if (this.state.bTea === false) {
      this.setState(
        {
          transformStay: -2610,
          mTea: false,
          gTea: false,
          hTea: false,
          bTea: true,
          autoPlayIndex: 1,
        },
        () => console.log(this.state)
      );
    }
  }

  autoVideoChangeFunc = () => {
    if (this.state.autoPlayIndex === 1) {
      this.mTeaFunc();
    } else if (this.state.autoPlayIndex === 2) {
      this.gTeaFunc();
    } else if (this.state.autoPlayIndex === 3) {
      this.hTeaFunc();
    } else if (this.state.autoPlayIndex === 4) {
      this.bTeaFunc();
    }
  };

  componentDidMount() {
    setInterval(this.autoVideoChangeFunc, 12000);
  }

  render() {
    const videoStyle = {
      transform: `translate(${this.state.transformStay}px, 0)`,
      transition: "ease 1s",
    };
    console.log(this.state.autoPlayIndex);
    return (
      <div className="videoLayer">
        <div className="videoLayerPlayer" style={videoStyle}>
          {/* left 고정 사진 div 시작 */}
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample3.jpg")} alt="tea" />
            </div>
          </div>
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample2.jpg")} alt="tea" />
            </div>
          </div>
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample1.jpg")} alt="tea" />
            </div>
          </div>
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample4.jpg")} alt="tea" />
            </div>
          </div>
          {/* left 고정 사진 div 시작  끝 */}
          {/* 1번 비디오 시작 */}
          <div className="videoinner">
            <div
              className={
                this.state.mTea ? "teaVideo teaVideoOn" : "teaVideo teaVideoOff"
              }
            >
              <video controls="" autoplay="" loop muted>
                <source src={mTeaVideo} type="video/mp4" />
              </video>
              <div
                className={this.state.mTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/">
                  <b>명차</b>
                  <br />
                  <p>고귀하고 품격 있는 티 라이프를 위한</p>
                  <p>오설록의 명차 라인 입니다.</p>
                </Link>
              </div>
            </div>
            <div
              className={
                this.state.mTea ? "teaImage teaVideoOff" : "teaImage teaVideoOn"
              }
            >
              <img src={require("../../images/mTea.jpg")} alt="tea" />
            </div>
          </div>
          {/* 1번 비디오 끝 */}
          {/* 2번 비디오 시작 */}
          <div className="videoinner">
            <div
              className={
                this.state.gTea ? "teaVideo teaVideoOn" : "teaVideo teaVideoOff"
              }
            >
              <video controls="" autoplay="" loop muted>
                <source src={gTeaVideo} type="video/mp4" />
              </video>
              <div
                className={this.state.gTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/">
                  <b>녹차/발효차/홍차</b>
                  <br />
                  <p>유기농 제주 차밭에서 자란</p>
                  <p>우리 녹차 발효차 라인 입니다.</p>
                </Link>
              </div>
            </div>
            <div
              className={
                this.state.gTea ? "teaImage teaVideoOff" : "teaImage teaVideoOn"
              }
            >
              <img src={require("../../images/gTea.jpg")} alt="tea" />
            </div>
          </div>
          {/* 2번 비디오 끝 */}
          {/* 3번 비디오 시작 */}
          <div className="videoinner">
            <div
              className={
                this.state.hTea ? "teaVideo teaVideoOn" : "teaVideo teaVideoOff"
              }
            >
              <video controls="" autoplay="" loop muted>
                <source src={hTeaVideo} type="video/mp4" />
              </video>
              <div
                className={this.state.hTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/">
                  <b>허브티</b>
                  <br />
                  <p>꽃잎,과일향이 가득한</p>
                  <p>풍미가 돋보이는 라인 입니다.</p>
                </Link>
              </div>
            </div>
            <div
              className={
                this.state.hTea ? "teaImage teaVideoOff" : "teaImage teaVideoOn"
              }
            >
              <img src={require("../../images/hTea.jpg")} alt="tea" />
            </div>
          </div>
          {/* 3번 비디오 끝 */}
          {/* 4번 비디오 시작 */}
          <div className="videoinner">
            <div
              className={
                this.state.bTea ? "teaVideo teaVideoOn" : "teaVideo teaVideoOff"
              }
            >
              <video controls="" autoplay="" loop muted>
                <source src={bTeaVideo} type="video/mp4" />
              </video>
              <div
                className={this.state.bTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/">
                  <b>블렌디드티</b>
                  <br />
                  <p>차와 함께</p>
                  <p>다른 풍미를 느낄 수 있는 라인 입니다.</p>
                </Link>
              </div>
            </div>
            <div
              className={
                this.state.bTea ? "teaImage teaVideoOff" : "teaImage teaVideoOn"
              }
            >
              <img src={require("../../images/bTea.jpg")} alt="tea" />
            </div>
          </div>
          {/* 4번 비디오 끝 */}
          {/* right 고정 사진 div 시작 */}
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample7.jpg")} alt="tea" />
            </div>
          </div>
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample5.jpg")} alt="tea" />
            </div>
          </div>
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample6.jpg")} alt="tea" />
            </div>
          </div>
          {/* right 고정 사진 div 시작  끝 */}
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
