import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import store from "./components/store";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import News from './components/pages/News';
import About from './components/pages/About';
import Architecture from './components/pages/Architecture';
import Installation from './components/pages/Installation';
import Downloads from './components/pages/Downloads';
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
        <Route path="/about" component={About}/>
        <Route path="/architecture" component={Architecture}/>
        <Route path="/installation" component={Installation}/>
        <Route path="/downloads" component={Downloads}/>
        <Route path="/wctablet" component={Wctablet}/>
        <Route path="/gstreamer" component={Gstreamer}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/registration" component={RegistrationUserForm}/>
        <Route path="/posts/:postId" exact component={SinglePostPage} />
        <Route path="/editPost/:postId" exact component={EditPostForm} />
        <Route path="/editUser/:userId" exact component={EditUserForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
