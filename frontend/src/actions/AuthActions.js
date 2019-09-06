import { createAction } from 'redux-actions';

import { urlAuthToken } from '../api/urls';
import CONSTANTS from '../constants';
import { apiPost } from './../api';

export const cleanAuth = createAction(CONSTANTS.ACTION_CLEAN_AUTH, () => {});
export const login = createAction(CONSTANTS.ACTION_LOGIN, body => apiPost(urlAuthToken, body)());
