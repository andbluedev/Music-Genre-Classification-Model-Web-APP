import { AboutPage } from '../pages/about/AboutPage';
import { UserPage } from '../pages/account/user/UserPage';
import { AdminPage } from '../pages/admin/AdminPage';
import { HomePage } from '../pages/home/HomePage';
import { RoomPage } from '../pages/room/RoomPage';
import { BuildingPage } from '../pages/building/BuildingPage';
import { StatisticsPage } from '../pages/admin/StatisticsPage';

export const appRoutes = [
  { path: '/about', name: 'AboutPage', Component: AboutPage },
  { path: '/user', name: 'UserPage', Component: UserPage },
  { path: '/admin/home', name: 'AdminPage', Component: AdminPage },
  { path: '/admin/statistics', name: 'AdminPage', Component: StatisticsPage },
  { path: '/home', name: 'HomePage', Component: HomePage },
  { path: '/room/:id', name: 'RoomPage', Component: RoomPage },
  { path: '/building/:id', name: 'FilePage', Component: BuildingPage }
];
