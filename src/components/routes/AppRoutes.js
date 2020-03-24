import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutPage, HomePage } from '../pages';

export const AppRoutes = () => (
  <Switch>
    <Route path='/about'>
      <AboutPage />
    </Route>

    <Route path='/'>
      <HomePage />
    </Route>
  </Switch>
);
