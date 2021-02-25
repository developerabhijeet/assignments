import react, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import RegisterForm from './registerForm';
import About from './about';
import Navbar from './navbar';
import NotFound from './NotFound';
import LoginForm from './loginForm';
import './App.css';
function App() {
  return (

    <div className="App">

      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/project" to="/" />
        <Route path="/not-found" component={NotFound} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
