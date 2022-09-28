import React from "react";
import './App.css';
import Home from './components/Home'
import Error from "./components/Error";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route component={Error} />
    </Switch>
  </Router>
}

export default App;
