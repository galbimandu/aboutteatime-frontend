import React, { Component } from "react";
import "./ActiveMainNav.scss";

class ActiveMainNav extends Component {
  constructor() {
    super();

    this.state = {
      part1: false,
      part2: false,
      part3: false,
    };
  }

  navPart1Func() {
    this.props.navDirectGoFunc(1);
  }
  navPart2Func() {
    this.props.navDirectGoFunc(2);
  }
  navPart3Func() {
    this.props.navDirectGoFunc(3);
  }

  render() {
    return (
      <div className="activeMainNav">
        <div className="navButton">
          <div
            className={"navCommon part1"}
            onClick={this.navPart1Func.bind(this)}
            onMouseOver={() => this.setState({ part1: true })}
            onMouseLeave={() => this.setState({ part1: false })}
          >
            <div
              className={
                this.state.part1
                  ? "textCommon textActive"
                  : "textCommon textHidden"
              }
            >
              <span>일구다</span>
            </div>
          </div>
          <div
            className={"navCommon part2"}
            onClick={this.navPart2Func.bind(this)}
            onMouseOver={() => this.setState({ part2: true })}
            onMouseLeave={() => this.setState({ part2: false })}
          >
            <div
              className={
                this.state.part2
                  ? "textCommon textActive"
                  : "textCommon textHidden"
              }
            >
              <span>가꾸다</span>
            </div>
          </div>
          <div
            className={"navCommon part3"}
            onClick={this.navPart3Func.bind(this)}
            onMouseOver={() => this.setState({ part3: true })}
            onMouseLeave={() => this.setState({ part3: false })}
          >
            <div
              className={
                this.state.part3
                  ? "textCommon textActive"
                  : "textCommon textHidden"
              }
            >
              <span>즐기다</span>
            </div>
          </div>
        </div>
        {/* <img src={require("../../images/activeMain/nav.png")} alt="sample" /> */}
      </div>
    );
  }
}

export default ActiveMainNav;
