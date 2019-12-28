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
            <div className="communication">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
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
