import _ from 'lodash';

function urlWithParams(url, params) {
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

export const apiGet = (url, params) => () => {
  return fetch(urlWithParams(url, params), {
    headers: localStorage.getItem('jwtToken')
      ? new Headers({
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
          languageid: localStorage.getItem('preferedLanguageID')
        })
      : new Headers({ 'Content-type': 'application/json', languageid: localStorage.getItem('preferedLanguageID') })
  })
    .then(v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
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

export const apiPut = (url, obj, params) => () => {
  return fetch(urlWithParams(url, params), {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: localStorage.getItem('jwtToken')
      ? new Headers({
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
          languageid: localStorage.getItem('preferedLanguageID')
        })
      : new Headers({ 'Content-type': 'application/json', languageid: localStorage.getItem('preferedLanguageID') })
  })
    .then(v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
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

export const apiPutFile = (url, obj, params) => () => {
  return fetch(urlWithParams(url, params), {
    method: 'PUT',
    body: obj,
    headers: localStorage.getItem('jwtToken')
      ? new Headers({ Authorization: 'Bearer ' + localStorage.getItem('jwtToken') })
      : new Headers({ 'Content-type': 'application/json' })
  })
    .then(v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
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

export const apiPost = (url, obj, params) => () => {
  return fetch(urlWithParams(url, params), {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: localStorage.getItem('jwtToken')
      ? new Headers({
          'Content-type': 'application/json',
          /**'Content-type': 'multipart/form-data',**/ Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
          languageid: localStorage.getItem('preferedLanguageID')
        })
      : new Headers({ 'Content-type': 'application/json', languageid: localStorage.getItem('preferedLanguageID') })
  })
    .then(v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
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

export const apiPostFile = (url, obj, params) => () => {
  return fetch(urlWithParams(url, params), {
    method: 'POST',
    body: obj,
    headers: localStorage.getItem('jwtToken')
      ? new Headers({ Authorization: 'Bearer ' + localStorage.getItem('jwtToken'), languageid: localStorage.getItem('preferedLanguageID') })
      : new Headers({ 'Content-type': 'application/json', languageid: localStorage.getItem('preferedLanguageID') })
  })
    .then(v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
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

export const apiDelete = (url, params) => () => {
  return fetch(urlWithParams(url, params), {
    method: 'DELETE',
    headers: localStorage.getItem('jwtToken')
      ? new Headers({
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
          languageid: localStorage.getItem('preferedLanguageID')
        })
      : new Headers({ 'Content-type': 'application/json', languageid: localStorage.getItem('preferedLanguageID') })
  })
    .then(async v => {
      if (v.status === 401) {
        let error = {
          error: {
            code: 401,
            message: 'Unhautorized'
          }
        };
        return error;
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
