import React, { Component } from "react";
import "./App.css";
import image from "./assets/2.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: "src/assets/1.jpg",
    };
  }

  setImage() {
    const images = {
      1: "assets/1.jpg",
      2: "assets/2.jpg",
      4: "assets/3.jpg",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <img alt="img" src={image} />
          <p>peterhencz.com | soon</p>
        </div>
      </div>
    );
  }
}

export default App;
