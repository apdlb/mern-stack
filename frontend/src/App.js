import React, { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { addTranslation, initialize, withLocalize } from 'react-localize-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import CONSTANTS from './constants';
import Login from './containers/auth/Login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('preferedLanguage')) {
      dispatch(
        initialize({
          languages: CONSTANTS.AVAILABLE_LANGUAGES,
          options: {
            renderToStaticMarkup,
            defaultLanguage: localStorage.getItem('preferedLanguage'),
            onMissingTranslation: () => ''
          }
        })
      );
    } else {
      dispatch(
        initialize({
          languages: CONSTANTS.AVAILABLE_LANGUAGES,
          options: {
            renderToStaticMarkup,
            defaultLanguage: CONSTANTS.LANGUAGE_ES,
            onMissingTranslation: () => ''
          }
        })
      );
    }
    dispatch(addTranslation(require('./locales/generic.json')));
    dispatch(addTranslation(require('./locales/validations.json')));
    dispatch(addTranslation(require('./locales/auth.json')));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default withLocalize(App);
