import { message } from 'antd';
import HttpStatus from 'http-status-codes';

import { IErrorControl } from '../interfaces';

export const errorControl = ({ props, err, redirect = false }: IErrorControl) => {
  let code /*, details, message*/;

  code = err.code;
  // message = err.message;
  // details = err.details;

  if (code === HttpStatus.UNAUTHORIZED) {
    if (props.auth && props.auth.tfa && props.auth.tfa.refresh_token) {
      // TODO refresh token
    } else {
      // TODO logout
    }
  } else if (code === 400 || code === 404) {
    // TODO show modal
  } else {
    // TODO error generico
  }
};

export const messageControl = (promise: Promise<any>) => {
  return promise
    .then((r: any) => {
      let res = r;

      if (r.payload) {
        res = r.payload;
      }

      if (res.message) {
        message.info(res.message);
      }

      return r;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const formHasErrors = (fieldsError: any): boolean => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};

export const formItemValidateStatus = (form: any, name: string): string => {
  const { getFieldError, isFieldTouched } = form;

  const error = isFieldTouched(name) && getFieldError(name);

  return error ? 'error' : '';
};

export const formItemHelp = (form: any, name: string): string => {
  const { getFieldError, isFieldTouched } = form;

  const error = isFieldTouched(name) && getFieldError(name);

  return error || '';
};
