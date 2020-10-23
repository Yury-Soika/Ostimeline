import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Downloads from './components/pages/Downloads';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';

const App = () => {
  return (
    <Router>
	    <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/downloads' component={Downloads}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));