import React, { Component } from "react";
import "./ActiveMain.scss";
import ActiveMainBackground from "../ActiveMainBackground/ActiveMainBackground";
import ActiveMainSlide from "../ActiveMainSlide/ActiveMainSlide";
import ActiveMainNav from "../ActiveMainNav/ActiveMainNav";

class ActiveMain extends Component {
  constructor() {
    super();

    this.state = {
      scrollPoint: 0, // 스크롤 값
      moveTurnKey: true, // 스크롤 재생/정지
      imgIndex: 1, // 이미지 change용 index
      logoTransFormValue: 0, // 스크롤위치에 따른 로고이미지 transForm값
      brandImgTransFormValue: 0, // 스크롤위치에 따른 브랜드이미지 transForm값
    };
  }

  intervalNum = 50; // 변수관리 : 자동 스크롤 이벤트 setInterval용 시간(단위:ms)
  componentDidMount() {
    // Step1. scroll 이벤트 add //
    // javascript 윈도우 객체의 scroll 이벤트 가져와서 준비 //
    window.addEventListener("scroll", this.addScrollFunc.bind(this)); //"scroll"이 내장이벤트 default이름임
    // Step End. 자동 스크롤 이벤트 계속 요청할 함수 //
    setInterval(this.scrollAutoMovingFunc.bind(this), this.intervalNum);
  }

  // Step2. scroll 좌표값 출력되는지 확인 //
  // 스크롤이 발생되면 값 확인하고 저장할 함수 //
  addScrollFunc(event) {
    //.scrollTop이 Y축 scroll좌표값을 위한 보기 위한 프로퍼티임 //
    // X축은 .scrollLeft임 //
    const scrolling = event.srcElement.scrollingElement.scrollTop;
    // 스크롤 값이 변경되면 그 값에 맞는 background 변경 함수 콜백으로 실행 //
    this.setState({ scrollPoint: scrolling }, this.changeImageFunc.bind(this));
  }

  // Step3. 좌표값을 받아 사용 //
  // state의 값을 받아 스크롤을 이동시킬 함수 //
  scrollMoveFunc() {
    document.documentElement.scrollTop = this.state.scrollPoint;
  }

  // Step4. state 및 스크롤 이동함수 실행 //
  // 스크롤 좌표값 증가 시키고 이동시킬 함수 //
  lastPoint = 10000; // 변수관리 : 스크롤 최종 좌표값
  addPoint = 2; // 변수관리 : 스크롤 움직일 추가값
  scrollPointAddFunc() {
    if (this.state.scrollPoint < this.lastPoint) {
      this.setState({ scrollPoint: this.state.scrollPoint + this.addPoint });
    } else {
      this.setState({ moveTurnKey: false });
    }

    this.scrollMoveFunc();
  }

  // 추가: 자동 스크롤 이벤트 중 다른 이벤트로 이벤트 중지, 재실행 함수  //
  // 무빙 턴키 확인 후 스위치 켜있으면 스크롤 이벤트 진행시킬 함수 //
  scrollAutoMovingFunc() {
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

  // 스크롤 좌표값에 이미지 변하는 고정slide 함수 //
  // 좌표 대비 이미지번호 매치, 이미지 transForm값 변경 //
  changeImageFunc() {
    if (this.state.scrollPoint >= 0) {
      this.setState({
        imgIndex: 1,
        logoTransFormValue: 0,
        brandImgTransFormValue: 0,
      });
    }
    if (this.state.scrollPoint >= 25) {
      this.setState({ logoTransFormValue: 70 });
    }
    if (this.state.scrollPoint >= 50) {
      this.setState({ brandImgTransFormValue: 30 });
    }
    if (this.state.scrollPoint >= 800) {
      this.setState({ imgIndex: 2 });
    }
    if (this.state.scrollPoint >= 1200) {
      this.setState({ imgIndex: 3 });
    }
    if (this.state.scrollPoint >= 1600) {
      this.setState({ imgIndex: 4 });
    }
    if (this.state.scrollPoint >= 2000) {
      this.setState({ imgIndex: 5 });
    }
    if (this.state.scrollPoint >= 2400) {
      this.setState({ imgIndex: 6 });
    }
    if (this.state.scrollPoint >= 3000) {
      this.setState({ imgIndex: 7 });
    }
    if (this.state.scrollPoint >= 3400) {
      this.setState({ imgIndex: 8 });
    }
    if (this.state.scrollPoint >= 3800) {
      this.setState({ imgIndex: 9 });
    }
    if (this.state.scrollPoint >= 4100) {
      this.setState({ imgIndex: 10 });
    }
    if (this.state.scrollPoint >= 4400) {
      this.setState({ imgIndex: 11 });
    }
    if (this.state.scrollPoint >= 4800) {
      this.setState({ imgIndex: 14 });
    }
  }

  // nav바용 scroll 좌표 이동 함수 //
  navDirectGoFunc(event) {
    if (event === 1) {
      document.documentElement.scrollTop = 700;
    }
    if (event === 2) {
      document.documentElement.scrollTop = 2410;
    }
    if (event === 3) {
      document.documentElement.scrollTop = 4500;
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div className="activeMain">
        <div
          className="activeMainContents"
          onClick={this.clickOnOffFunc.bind(this)}
          onWheel={this.wheelOffFunc.bind(this)}
        >
          <ActiveMainBackground imgIndex={this.state.imgIndex} />
          <ActiveMainSlide
            logoTransFormValue={this.state.logoTransFormValue}
            brandImgTransFormValue={this.state.brandImgTransFormValue}
          />
        </div>
        <ActiveMainNav navDirectGoFunc={this.navDirectGoFunc.bind(this)} />
      </div>
    );
  }
}

export default ActiveMain;
