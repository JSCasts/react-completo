import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Shots from './shots/Shots';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Shots} />
  </Router>
);

export default App;
