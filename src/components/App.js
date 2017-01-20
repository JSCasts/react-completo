import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Container from './container/Container';
import Shots from './shots/Shots';
import ShotDetails from './shot-details/ShotDetails';

import './styles.css';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Shots} />
      <Route path="shots/:id" component={ShotDetails} />
    </Route>
  </Router>
);

export default App;
