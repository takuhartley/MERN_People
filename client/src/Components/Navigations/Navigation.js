import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Homepage</Link>
          <ul>
            <li>
              <Link to="/register">Create Account</Link>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
