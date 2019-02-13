import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/foodlist" className="nav-link">
                Food <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
