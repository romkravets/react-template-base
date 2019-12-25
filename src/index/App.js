import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import peppleImg from "../../assets/images/peopple.png";
import bottomObject from "../../assets/images/bottom-object.png";
import topObject from "../../assets/images/top-object.png";

import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <main className="mein-content">
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
        </main>
        <img className="mein-content__bottom-img" src={bottomObject} />
        <img className="mein-content__top-img" src={topObject} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
