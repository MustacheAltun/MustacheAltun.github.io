import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Keuzedeel from './Components/Keuzedeel';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route path="/keuzedeel">
          <Navigation />
          <Keuzedeel />
        </Route>

        <Route path="/">
          <Header/>
          <About/>
          <Work/>
          <Contact/>
          <Navigation/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}



export default App;
