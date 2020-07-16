import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Question } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/question" component={Question} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
