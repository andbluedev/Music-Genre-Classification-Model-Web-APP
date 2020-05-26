import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { FilePage } from '../pages/tp/TpPage';
import { AdminPage } from '../pages/admin/AdminPage';
import { BuildingPage } from '../pages/building/BuildingPage';
import { RoomPage } from '../pages/room/RoomPage';
import { UserPage } from '../pages/account/user/UserPage';
import { StatisticsPage } from '../pages/admin/StatisticsPage';
export const AppRoutes = () => (
  <Switch>
    <Route path='/about'>
      <AboutPage />
    </Route>

    <Route path='/user'>
      <UserPage />
    </Route>

    <Route exact path='/admin/home'>
      <AdminPage />
    </Route>

    <Route exact path='/admin/statistics'>
      <StatisticsPage />
    </Route>

    <Route exact path='/home'>
      <HomePage />
    </Route>

    <Route path='/room/:id'>
      <RoomPage />
    </Route>

    <Route path='/tp'>
      <FilePage />
    </Route>

    <Route path='/building/:id'>
      <BuildingPage />
    </Route>
  </Switch>
);
