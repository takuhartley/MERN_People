import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Username: </label>
          <input type="text" />
          <label>Password: </label>
          <input type="text" />
          <label>Re-enter Password: </label>
          <input type="text" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
