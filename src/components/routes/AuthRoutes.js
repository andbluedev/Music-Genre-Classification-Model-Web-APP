import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthPage } from '../pages/account/AuthPage';

export const AuthRoutes = () => (
  <Switch>
    <Route path='/register' exact component={AuthPage} />
    <Route path='/' exact component={AuthPage} />
    <Route path='/login' exact component={AuthPage} />
  </Switch>
);
