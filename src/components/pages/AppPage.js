import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AboutPage } from './about/AboutPage';
import { UserPage } from './account/user/UserPage';
import { AdminPage } from './admin/AdminPage';
import { HomePage } from './home/HomePage';
import { RoomPage } from './room/RoomPage';
import { FilePage } from './tp/TpPage';
import { BuildingPage } from './building/BuildingPage';

export function AppPage() {
  const location = useLocation();
  const path = location.pathname;
  let page;
  switch (path) {
    case '/user':
      page = <UserPage />;
      break;
    case '/about':
      page = <AboutPage />;
      break;
    case '/admin':
      page = <AdminPage />;
      break;
    case '/home':
      page = <HomePage />;
      break;
    case '/tp':
      page = <FilePage />;
      break;
    case (path.match(/^\/building\//) || {}).input:
      page = <BuildingPage />;
      break;
    case (path.match(/^\/room\//) || {}).input:
      page = <RoomPage />;
      break;
  }

  return (
    <TransitionGroup>
      <CSSTransition
        key={path}
        addEndListener={(node, done) =>
          node.addEventListener('transitionend', done, false)
        }
        classNames='fade'
      >
        {page}
      </CSSTransition>
    </TransitionGroup>
  );
}
