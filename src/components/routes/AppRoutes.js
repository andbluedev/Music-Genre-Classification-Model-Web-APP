import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { LinksPage } from '../pages/links/LinksPage';

export const appRoutes = [
  { path: '/home', name: 'HomePage', Component: HomePage },
  { path: '/about', name: 'AboutPage', Component: AboutPage },
  { path: '/links', name: 'LinksPage', Component: LinksPage }
];
