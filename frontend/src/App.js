import './App.css';

import React, { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { addTranslation, initialize, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import CONSTANTS from './constants';
import Login from './containers/auth/Login';

const App = () => {
  useEffect(() => {
    // if (this.props) {
    //   if (localStorage.getItem('preferedLanguage')) {
    //     this.props.initialize({
    //       languages: CONSTANTS.AVAILABLE_LANGUAGES,
    //       options: {
    //         renderToStaticMarkup,
    //         defaultLanguage: localStorage.getItem('preferedLanguage'),
    //         onMissingTranslation: () => ''
    //       }
    //     });
    //   } else {
    //     this.props.initialize({
    //       languages: CONSTANTS.AVAILABLE_LANGUAGES,
    //       options: {
    //         renderToStaticMarkup,
    //         defaultLanguage: CONSTANTS.LANGUAGE_ES,
    //         onMissingTranslation: () => ''
    //       }
    //     });
    //   }
    //   this.props.addTranslation(require('./locales/generic.json'));
    //   this.props.addTranslation(require('./locales/validations.json'));
    //   this.props.addTranslation(require('./locales/auth.json'));
    // }
  });

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
  { initialize, addTranslation }
)(withLocalize(App));
