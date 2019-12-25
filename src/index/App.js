import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import peppleImg from "../../assets/images/peopple.png";
import bottomObject from "../../assets/images/bottom-object.png";
import topObject from "../../assets/images/top-object.png";

import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <Header />
          <main className="mein-content">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              {/* <Route path="/users">
                <Users />
              </Route> */}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            {/* <div className="communication">
              <div>
                <h1>Communication</h1>
                <p>
                  Lorem ipsum dolor sit amet, conse cetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolor.
                </p>
                <button>Learn More</button>
              </div>
              <div>
                <img className="communication__img" src={peppleImg} />
              </div>
            </div> */}
          </main>
          <img className="mein-content__bottom-img" src={bottomObject} />
          <img className="mein-content__top-img" src={topObject} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
