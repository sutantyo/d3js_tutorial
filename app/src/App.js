import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import DataMenu from './data-tutorial/data-menu'
import SVGMenu from './svg-tutorial/svg-menu'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to={`/`}>Main</Link>
          <Link to={`/data`}>Data</Link>
          <Link to={`/svg`}>SVG</Link>
          <Route path="/data" component={DataMenu} />
          <Route path="/svg" component={SVGMenu} />
        </div>
      </Router>
    );
  }
}

export default App;
