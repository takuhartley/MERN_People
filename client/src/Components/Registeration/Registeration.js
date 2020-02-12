import React, { Component } from "react";

export class Registeration extends Component {
  render() {
    return (
      <div>
        <label>First Name: </label>
        <input type="text" />
        <label>Last Name: </label>
        <input type="text" />
        <label>Email: </label>
        <input type="text" />
        <label>Password: </label>
        <input type="text" />
        <label>Re-enter Password: </label>
        <input type="text" />
        <input type="submit" value="Create Account" />
      </div>
    );
  }
}

export default Registeration;
