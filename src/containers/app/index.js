import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Profile from '../profile';

const App = () => (
  <div>
    <header>
    </header>

    <main>
      <Route exact path="/" component={Profile} />
    </main>
  </div>
);

export default App;

// <Link to="/">Home</Link>
// <Link to="/about-us">About</Link>

// <Route exact path="/about-us" component={About} />
