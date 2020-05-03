import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from '../pages/account/LoginPage';

export const AuthRoutes = () => (
  <Switch>
    <Route path='/' exact component={LoginPage} />
    <Route path='/login' exact component={LoginPage} />
  </Switch>
);
