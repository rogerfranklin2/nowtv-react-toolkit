import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from '../node_modules/history/lib/createBrowserHistory';

import routes from './routes';
import Styles from "./css/app.scss";

ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()}  />,
  document.getElementById('app')
)
