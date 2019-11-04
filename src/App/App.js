import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage/HomePage'
import SearchPage from '../SearchPage/SearchPage'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/search" component={SearchPage} />
  </Switch>
)

export default App;
