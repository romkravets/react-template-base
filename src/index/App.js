import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <h1>My React App!</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
