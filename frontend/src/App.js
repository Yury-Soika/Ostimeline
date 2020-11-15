import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import store from "./components/store";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import News from './components/pages/News';
import About from './components/pages/About';
import Architecture from './components/pages/Architecture';
import Installation from './components/pages/Installation';
import Downloads from './components/downloads/Downloads';
import Wctablet from './components/pages/Wctablet';
import Gstreamer from './components/pages/Gstreamer';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import { SinglePostPage } from './components/posts/SinglePostPage';
import { EditPostForm } from './components/posts/EditPostForm';
import RegistrationUserForm from './components/users/RegistrationUserForm';
import EditUserForm from './components/users/EditUserForm';

const App = () => {
  return (
    <Router>
	    <NavBar />
      <Switch>
        <Route path="/" exact component={News}/>
        <Route path="/about" exact component={About}/>
        <Route path="/architecture" exact component={Architecture}/>
        <Route path="/installation" exact component={Installation}/>
        <Route path="/downloads" exact component={Downloads}/>
        <Route path="/wctablet" exact component={Wctablet}/>
        <Route path="/gstreamer" exact component={Gstreamer}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/registration" exact component={RegistrationUserForm}/>
        <Route path="/posts/:postId" exact component={SinglePostPage} />
        <Route path="/editPost/:postId" exact component={EditPostForm} />
        <Route path="/editUser/:userId" exact component={EditUserForm} />
        <Redirect from="*" to="/" /> 
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
