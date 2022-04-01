import React from "react";
import './App.css';
import Home from './components/Home'
import Project1 from "./components/Project1"
import Error from "./components/Error";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/casestudy01">
          <Project1 />
        </Route>
        <Route component={Error} />
      </Switch>
    </ScrollToTop>
  </Router>
}

export default App;
