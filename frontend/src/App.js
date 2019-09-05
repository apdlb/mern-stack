import './App.css';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Login from './containers/auth/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default connect(
  null,
  {}
)(App);
