import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export function AppRouter(props) {
  return <Router>{props.children}</Router>;
}
