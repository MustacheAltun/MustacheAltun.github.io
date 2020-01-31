import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './Components/Header';
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<About />, document.getElementById('About1'));
ReactDOM.render(<Work />, document.getElementById('Work1'));
ReactDOM.render(<Contact />, document.getElementById('Footer1'));
ReactDOM.render(<Navigation />, document.getElementById('Navigation'));

serviceWorker.unregister();
