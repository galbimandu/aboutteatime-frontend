import React, { Component } from "react";
import "./TeaShopGoTopButton.scss";

class TeaShopGoTopButton extends Component {
  constructor() {
    super();

    this.state = {
      scrolling: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = (event) => {
    const scrolling = ("scroll", event.srcElement.scrollingElement.scrollTop);
    this.setState({ scrolling }, console.log(this.state.scrolling));
  };

  scrollingFunc() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div
        className={
          this.state.scrolling ? "goTop goTopVisible" : "goTop goTopInvisible"
        }
        onClick={this.scrollingFunc.bind(this)}
      >
        <img src={require("../../images/btn_goTop.png")} alt="kakao" />
      </div>
    );
  }
}

export default TeaShopGoTopButton;
