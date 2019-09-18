import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouteContent from "./routes";

const App = () => {
  return (
    <Router>
      <header>
        <Link to="/search">Search</Link>
      </header>
      <article>
        <RouteContent/>
      </article>
      <footer>Foot</footer>
    </Router>
  );
};

export default hot(module)(App);