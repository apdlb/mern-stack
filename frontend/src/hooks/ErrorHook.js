import { getTranslate } from 'react-localize-redux';
import { useStore } from 'react-redux';
import Swal from 'sweetalert2';

const renderErrorBody = (message, details) => {
  let body = '';

  if (details) {
    if (details instanceof Array) {
      for (const error of details) {
        body += `- ${error.message}<br>`;
      }
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

  const errorControl = (err, modal = false, redirect) => {
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
      Swal.fire({
        type: 'error',
        title: translate('generic.error'),
        html: renderErrorBody(message, details)
      });
    } else {
      // TODO error generico
    }
  };

  return {
    errorControl
  };
};

export default useError;
