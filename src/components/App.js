import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './container/Container';
import Shots from './shots/Shots';

import './styles.css';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Shots} />
    </Route>
  </Router>
);

export default App;
