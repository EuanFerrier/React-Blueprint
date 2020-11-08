import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './containers/LoginPage'
//require('./Styles/Scss/main.scss')

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        {/* <Route exact path='/dashboard' component={Dashboard} /> */}
      </Switch>
    </Router>
  )
}