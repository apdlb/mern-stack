import { message } from 'antd';
import axios from 'axios';
import HttpStatus from 'http-status-codes';
import _ from 'lodash';

import { IApiFetch, IError } from '../interfaces';

export const apiFetch = ({ method, url, body, params, file = false, formData }: IApiFetch): Promise<any> => {
  const headers = {} as any;

  if (localStorage.getItem('jwtToken')) headers.Authorization = `Bearer ${localStorage.getItem('jwtToken')}`;
  if (!file) headers['Content-type'] = 'application/json';

  return axios({
    method,
    url: urlWithParams(url, params),
    headers,
    data: file ? formData : body
  })
    .then((res: any) => {
      return (res = res.data.data);
    })
    .catch((err: any) => {
      let res = err.response.data;

      if (err.response.status === HttpStatus.UNAUTHORIZED) {
        // Remove token from localStorage and reload page to go to login
        localStorage.removeItem('jwtToken');
        window.location.reload();
      } else if (err.response.status === HttpStatus.NO_CONTENT) {
        res = {} as any;
      }

      showErrorMessages(res.error);

      return Promise.reject(res.error);
    });
};

const urlWithParams = (url: string, params?: string | string[]) => {
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
};

const showErrorMessages = (error: IError): void => {
  if (error?.details?.length) {
    for (const detail of error.details) {
      message.error(detail?.message);
    }
  } else if (error?.message) {
    message.error(error.message);
  } else {
    message.error('An error has occurred');
  }
};
