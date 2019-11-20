import './App.css';

import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { addTranslation, initialize } from 'react-localize-redux';
import { useDispatch } from 'react-redux';

import Routers from './routers';
import CONSTANTS from './utils/constants';

interface Props {}

const App: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('preferedLanguage')) {
      dispatch(
        initialize({
          languages: CONSTANTS.AVAILABLE_LANGUAGES,
          options: {
            renderToStaticMarkup,
            defaultLanguage: localStorage.getItem('preferedLanguage') || undefined,
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
    dispatch(addTranslation(require('./locales/nav.json')));
    dispatch(addTranslation(require('./locales/auth.json')));
    dispatch(addTranslation(require('./locales/entities.json')));
  }, [dispatch]);

  return (
    <>
      <Layout className="grid-container">
        <Routers />
      </Layout>
    </>
  );
};

export default App;
