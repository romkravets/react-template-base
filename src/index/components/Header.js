import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <nav className="page-header__nev">
          <ul className="page-header__items">
            <li className="page-header__item">
              <Link className="page-header__link" to="/">
                Home
              </Link>
            </li>
            <li className="page-header__item">
              <Link className="page-header__link" to="/about">
                Blog
              </Link>
            </li>
            <li className="page-header__item">
              <Link className="page-header__link" to="/about">
                About us
              </Link>
            </li>
            <li className="page-header__item">
              <Link className="page-header__link" to="/about">
                Team
              </Link>
            </li>
            <li className="page-header__item">
              <Link className="page-header__link" to="/">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
