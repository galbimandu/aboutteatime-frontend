import React, { Component } from "react";
import "./TopGoButton.scss";

class TopGoButton extends Component {
  constructor() {
    super();

    this.state = {
      scrolling: 0,
      turnkey: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.actScroll);
  }

  actScroll = (event) => {
    const scrolling = ("scroll", event.srcElement.scrollingElement.scrollTop);
    this.setState({ scrolling }, this.onFunc.bind(this));
  };

  onFunc() {
    if (this.state.scrolling > 100) {
      this.setState({ turnkey: true });
    } else {
      this.setState({ turnkey: false });
    }
  }

  scrollingFunc() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div
        className={
          this.state.turnkey ? "goTop goTopVisible" : "goTop goTopInvisible"
        }
        onClick={this.scrollingFunc.bind(this)}
      >
        <img src={require("../../images/btn_goTop.png")} alt="kakao" />
      </div>
    );
  }
}

export default TopGoButton;
