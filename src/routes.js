import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Question, Feedback, Settings } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/question" component={Question} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
