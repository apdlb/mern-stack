import { getTranslate } from 'react-localize-redux';
import { useStore } from 'react-redux';

import { IDetailError, IError } from '../interfaces';

const renderErrorBody = (message: string = '', details?: IDetailError[]): string => {
  let body = '';

  if (details && details.length) {
    for (const error of details) {
      body += `- ${error.message}<br>`;
    }
  } else {
    body = message;
  }

  return body;
};

const useError = () => {
  const store = useStore();
  const props = store.getState();
  const translate = getTranslate(props.localize);

  const errorControl = (err: IError, redirect: boolean) => {
    let code, details, message;

    code = err.code;
    message = err.message;
    details = err.details;

    if (code === 401) {
      if (props.auth && props.auth.tfa && props.auth.tfa.refresh_token) {
        // TODO refresh token
      } else {
        // TODO logout
      }
    } else if (code === 400 || code === 404) {
      // Lanzar Modal
    } else {
      // TODO error generico
    }
  };

  return {
    errorControl
  };
};

export default useError;
