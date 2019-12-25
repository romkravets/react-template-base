import React, { Component } from "react";

import peppleImg from "../../../assets/images/peopple.png";

//import "../styles/Header.scss";

class Home extends Component {
  render() {
    return (
      <div className="communication">
        <div>
          <h1>Communication</h1>
          <p>
            Lorem ipsum dolor sit amet, conse cetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolor.
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <img className="communication__img" src={peppleImg} />
        </div>
      </div>
    );
  }
}

export default Home;
