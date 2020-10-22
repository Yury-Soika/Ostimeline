import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
	    <NavBar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  );z
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));