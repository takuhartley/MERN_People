import React, { Component } from "react";
export class Registeration extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: ""
    };
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeUserName(e) {
    this.setState({
      userName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`First Name: ${this.state.firstName}`);
    console.log(`Last Name: ${this.state.lastName}`);
    console.log(`Username: ${this.state.userName}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: ""
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>First Name: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
          />
          <label>Last Name: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.onChangeLastName}
          />
          <label>Username: </label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.onChangeUserName}
          />
          <label>Email: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <label>Password: </label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <input type="submit" value="Create Account" />
        </form>
      </div>
    );
  }
}
export default Registeration;
