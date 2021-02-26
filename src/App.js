import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import About from './component/AboutComponent/about';
import Contact from './component/ContactComponent/contact';
import Home from './component/HomeComponent/home';
import Error from './component/PageNotFound';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Form from './component/Forms/Forms';
function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={Form} />
        <Redirect from="/project" to="/" />
        <Route path="/not-found" component={Error} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
