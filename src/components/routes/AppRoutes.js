import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { FilePage } from '../pages/tp/TpPage';
import { TechPage } from "../pages/tech/TechPage";

export const AppRoutes = () => (
  <Switch>
    <Route path='/about'>
      <AboutPage />
    </Route>
    <Route path='/home'>
      <HomePage />
    </Route>
    <Route path='/tp'>
      <FilePage />
    </Route>
  <Route path='/tech'>
      <TechPage />
  </Route>
  </Switch>
);
