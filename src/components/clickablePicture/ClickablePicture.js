import React, { Component } from "react";
import "./ClickablePicture.css";

export default class ClickablePicture extends Component {
  state = {
    active: false,
  };

  changePicture = (img, newImg) => {
    let currentImg = img;

    if (this.state.active) {
      currentImg = newImg;
    }

    return currentImg;
  };

  setImage = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { img } = this.props;
    const newImg = "/img/persons/maxence-glasses.png";
    return (
      <div className="picture-box">
        <img
          onClick={this.setImage}
          className="clickablePicture"
          src={this.changePicture(img, newImg)}
          alt="image"
        />
      </div>
    );
  }
}
