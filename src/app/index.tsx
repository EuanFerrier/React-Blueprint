import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './globalStore'
import LoginPage from './Features/Login/Login.js'
require('./Styles/Scss/main.scss')

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          {/* <Route exact path='/dashboard' component={Dashboard} /> */}
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root'));
  
  module.hot.accept();