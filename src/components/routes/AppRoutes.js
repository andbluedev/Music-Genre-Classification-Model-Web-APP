import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppPage } from '../pages/AppPage';

export const AppRoutes = () => (
  <Switch>
    <Route path='/about' component={AppPage} />
    <Route path='/user' component={AppPage} />
    <Route path='/admin' component={AppPage} />
    <Route exact path='/home' component={AppPage} />
    <Route path='/room/:id' component={AppPage} />
    <Route path='/tp' component={AppPage} />
    <Route path='/building/:id' component={AppPage} />
  </Switch>
);
