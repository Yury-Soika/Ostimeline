import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Architecture from './components/pages/Architecture';
import Installation from './components/pages/Installation';
import Downloads from './components/pages/Downloads';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';

const App = () => {
  return (
    <Router>
	    <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/architecture" component={Architecture}/>
        <Route path="/installation" component={Installation}/>
        <Route path="/downloads" component={Downloads}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));