import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from '../Components/Login/Login';
import Registeration from '../Components/Registeration/Registeration';
import UserAccount from '../Components/UserAccount/UserAccount';
import Homepage from '../Components/Homepage/Homepage';
import Navigation from '../Components/Navigations/Navigation';
import About from '../Components/About/About';
function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Homepage} />
      <Route path="/register" component={Registeration} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
