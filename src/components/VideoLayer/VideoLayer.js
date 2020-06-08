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
      movingTurnKey: true,
    };
  }

  intervalNum = 5000; // 비디오 로테이션 시간
  timer; // 비디오 변수선언: 정지, 재실을 위한 변수 저장 //
  componentDidMount() {
    this.timer = setInterval(
      this.autoVideoChangeFunc.bind(this),
      this.intervalNum
    );
  }

  // 언마운트시 interval해제:지속적으로 코드 때리는 타이머함수는 언마운트시 제거 //
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // 버튼 클릭 핸들러 함수 //
  mTeaFunc() {
    if (this.state.mTea === false) {
      this.setState({
        transformStay: 0,
        mTea: true,
        gTea: false,
        hTea: false,
        bTea: false,
        autoPlayIndex: 2,
      });
    }
  }

  // 버튼 클릭 핸들러 함수 //
  gTeaFunc() {
    if (this.state.gTea === false) {
      this.setState({
        transformStay: -1000,
        mTea: false,
        gTea: true,
        hTea: false,
        bTea: false,
        autoPlayIndex: 3,
      });
    }
  }

  // 버튼 클릭 핸들러 함수 //
  hTeaFunc() {
    if (this.state.hTea === false) {
      this.setState({
        transformStay: -2000,
        mTea: false,
        gTea: false,
        hTea: true,
        bTea: false,
        autoPlayIndex: 4,
      });
    }
  }

  // 버튼 클릭 핸들러 함수 //
  bTeaFunc() {
    if (this.state.bTea === false) {
      this.setState({
        transformStay: -3000,
        mTea: false,
        gTea: false,
        hTea: false,
        bTea: true,
        autoPlayIndex: 1,
      });
    }
  }

  // 비디오 로테이션 돌릴 함수 //
  autoVideoChangeFunc() {
    if (this.state.movingTurnKey === true && this.state.autoPlayIndex === 1) {
      this.mTeaFunc();
    } else if (
      this.state.movingTurnKey === true &&
      this.state.autoPlayIndex === 2
    ) {
      this.gTeaFunc();
    } else if (
      this.state.movingTurnKey === true &&
      this.state.autoPlayIndex === 3
    ) {
      this.hTeaFunc();
    } else if (
      this.state.movingTurnKey === true &&
      this.state.autoPlayIndex === 4
    ) {
      this.bTeaFunc();
    }
  }

  // 비디오 정지, 그리고 다시 재시작 시킬 함수 //
  pauseFunc() {
    clearInterval(this.timer);
    setTimeout(
      (this.timer = setInterval(
        this.autoVideoChangeFunc.bind(this),
        this.intervalNum
      )),
      this.intervalNum / 2 // 클릭 발생시 로테이션시간의 반을 기다렸다가 다시 인터벌 돌려라 //
    );
  }

  render() {
    console.log(this.state);
    //video slide시킬 translate
    const videoStyle = {
      transform: `translate(${this.state.transformStay}px, 0)`,
      transition: "ease 1s",
    };
    return (
      <div className="videoLayer">
        <div className="videoLayerPlayer" style={videoStyle}>
          {/* left 고정 사진 div 시작 */}
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
          <div className="videoinner">
            <div className="teaImage">
              <img src={require("../../images/teaSample7.jpg")} alt="tea" />
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
              <video controls="" autoPlay="autoplay" loop muted>
                <source src={mTeaVideo} type="video/mp4" />
              </video>
              <div
                // 비디오 일시 정지 함수
                onMouseOver={() => this.setState({ movingTurnKey: false })}
                onMouseLeave={() => this.setState({ movingTurnKey: true })}
                className={this.state.mTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/" className="min">
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
              <video controls="" autoPlay="autoplay" loop muted>
                <source src={gTeaVideo} type="video/mp4" />
              </video>
              <div
                // 비디오 일시 정지 함수
                onMouseOver={() => this.setState({ movingTurnKey: false })}
                onMouseLeave={() => this.setState({ movingTurnKey: true })}
                className={this.state.gTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/" className="min">
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
              <video controls="" autoPlay="autoplay" loop muted>
                <source src={hTeaVideo} type="video/mp4" />
              </video>
              <div
                // 비디오 일시 정지 함수
                onMouseOver={() => this.setState({ movingTurnKey: false })}
                onMouseLeave={() => this.setState({ movingTurnKey: true })}
                className={this.state.hTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/" className="min">
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
              <video controls="" autoPlay="autoplay" loop muted>
                <source src={bTeaVideo} type="video/mp4" />
              </video>
              <div
                // 비디오 일시 정지 함수
                onMouseOver={() => this.setState({ movingTurnKey: false })}
                onMouseLeave={() => this.setState({ movingTurnKey: true })}
                className={this.state.bTea ? "teaText teaTextOn" : "teaText"}
              >
                <Link to="/" className="min">
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
          {/* right 고정 사진 div 시작  끝 */}
        </div>
        <div className="videoBottomButtun">
          <div className="videoBottomButtunContents">
            <ul onClick={this.pauseFunc.bind(this)}>
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
      </div>
    );
  }
}

export default VideoLayer;
