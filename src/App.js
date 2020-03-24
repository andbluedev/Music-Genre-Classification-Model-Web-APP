import React from 'react';
import './App.scss';
import { AppRouter } from './components/routes/AppRouter';
import { AppNav } from './components/layout';
import { AppRoutes } from './components/routes';
import UserContext, {
  emptyUser as initialUser,
  reducer
} from './data/context/UserContext';

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialUser);
  return (
    <div className='app'>
      <UserContext.Provider value={{ state, dispatch }}>
        <AppRouter>
          <AppNav />
          <div className='app-wrapper'>
            <AppRoutes />
          </div>
        </AppRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
