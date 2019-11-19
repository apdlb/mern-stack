import HttpStatus from 'http-status-codes';
import _ from 'lodash';

import { IApiFetch } from '../interfaces';

function urlWithParams(url: string, params?: string | string[]) {
  if (params) {
    const urlParams = url.match(/{param}/g) || [];
    if (params instanceof Array) {
      params.forEach((value, index) => {
        if (index < _.size(urlParams)) {
          url = _.replace(url, '{param}', value);
        } else {
          url = `${url}/${value}`;
        }
      });
    } else {
      if (_.size(urlParams)) {
        url = _.replace(url, '{param}', params);
      } else {
        url = `${url}/${params}`;
      }
    }
  }
  return url;
}

export const apiFetch = ({ method, url, body, params, file = false, formData }: IApiFetch): Promise<any> => {
  const headers = {} as any;

  if (localStorage.getItem('jwtToken')) headers.Authorization = `Bearer ${localStorage.getItem('jwtToken')}`;
  if (!file) headers['Content-type'] = 'application/json';

  return fetch(urlWithParams(url, params), {
    method,
    headers: new Headers(headers),
    body: !file ? JSON.stringify(body) : formData
  })
    .then(v => {
      if (v.status === HttpStatus.UNAUTHORIZED) {
        // Remove token from localStorage and reload page to go to login
        localStorage.removeItem('jwtToken');
        window.location.reload();

        const error = {
          error: {
            code: HttpStatus.UNAUTHORIZED,
            message: 'Unhautorized'
          }
        };
        return error;
      } else if (v.status === HttpStatus.NO_CONTENT) {
        return {} as any;
      } else {
        return v.json();
      }
    })
    .then(r => {
      if (r.error) {
        return Promise.reject(r.error);
      }
      return (r = r.data);
    });
};
