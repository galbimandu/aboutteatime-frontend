import React, { Component } from "react";
import "./ActiveMainBackground.scss";

class ActiveMainBackground extends Component {
  render() {
    return (
      <div className="activeMainBackground">
        <img
          src={require(`../../images/activeMain/active${this.props.imgIndex}.jpg`)}
          alt="sample"
        />
      </div>
    );
  }
}

export default ActiveMainBackground;
