import React, { Component } from "react";
import "./ActiveMain.scss";
import ActiveMainBackground from "../ActiveMainBackground/ActiveMainBackground";
import ActiveMainSlide from "../ActiveMainSlide/ActiveMainSlide";
import ActiveMainNav from "../ActiveMainNav/ActiveMainNav";

class ActiveMain extends Component {
  constructor() {
    super();

    this.state = {
      scrollPoint: 0,
      moveTurnKey: true,
    };
  }

  intervalNum = 100; // 변수관리 : 자동 스크롤 이벤트 setInterval용 시간(단위:ms)
  componentDidMount() {
    // Step1. scroll 이벤트 add //
    // javascript 윈도우 객체의 scroll 이벤트 가져와서 준비 //
    window.addEventListener("scroll", this.addScrollFunc.bind(this)); //"scroll"이 내장이벤트 default이름임
    // Step End. 자동 스크롤 이벤트 계속 요청할 함수 //
    setInterval(this.scrollautoMovingFunc.bind(this), this.intervalNum);
  }

  // Step2. scroll 좌표값 출력되는지 확인 //
  // 스크롤이 발생되면 값 확인하고 저장할 함수 //
  addScrollFunc(event) {
    const scrolling = event.srcElement.scrollingElement.scrollTop;
    //.scrollTop이 Y축 scroll좌표값을 위한 보기 위한 프로퍼티임
    // X축은 .scrollLeft임
    this.setState({ scrollPoint: scrolling });
  }

  // Step3. 좌표값을 받아 사용 //
  // state의 값을 받아 스크롤을 이동시킬 함수 //
  scrollMoveFunc() {
    document.documentElement.scrollTop = this.state.scrollPoint;
  }

  // Step4. state 및 스크롤 이동함수 실행 //
  // 스크롤 좌표값 증가 시키고 이동시킬 함수 //
  lastPoint = 2000; // 변수관리 : 스크롤 최종 좌표값
  addPoint = 1; // 변수관리 : 스크롤 움직일 추가값
  scrollPointAddFunc() {
    if (this.state.scrollPoint < this.lastPoint) {
      this.setState({ scrollPoint: this.state.scrollPoint + this.addPoint });
    } else {
      this.setState({ scrollPoint: this.state.scrollPoint });
    }
    this.scrollMoveFunc();
  }

  // 추가: 자동 스크롤 이벤트 중 다른 이벤트로 이벤트 중지, 재실행 함수  //
  // 무빙 턴키 확인 후 스위치 켜있으면 스크롤 이벤트 진행시킬 함수 //
  scrollautoMovingFunc() {
    if (this.state.moveTurnKey === true) {
      this.scrollPointAddFunc();
    }
  }

  // 클릭 발생시 무빙 턴키("this.state.moveTurnKey") 껏다, 켰다 함수 //
  clickOnOffFunc() {
    if (this.state.moveTurnKey === true) {
      this.setState({ moveTurnKey: false });
    } else {
      this.setState({ moveTurnKey: true });
    }
  }

  // 휠이동 발생시 무빙 턴키("this.state.moveTurnKey") 끄기만 할 함수 //
  wheelOffFunc() {
    this.setState({ moveTurnKey: false });
  }

  render() {
    console.log(this.state.scrollPoint);
    return (
      <div className="activeMain">
        <div
          className="activeMainContents"
          onClick={this.clickOnOffFunc.bind(this)}
          onWheel={this.wheelOffFunc.bind(this)}
        >
          <ActiveMainBackground />
          <ActiveMainSlide />
        </div>
        <ActiveMainNav />
      </div>
    );
  }
}

export default ActiveMain;
