import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const AuthRoutes = () => (
  <Switch>
    <Route path='/register' exact component={AuthRoutes} />
    <Route path='/login' exact component={AuthRoutes} />
  </Switch>
);
