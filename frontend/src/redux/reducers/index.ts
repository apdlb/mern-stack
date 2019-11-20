import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';

import { auth } from './auth';

const reducer = combineReducers({
  localize: localizeReducer,
  auth
} as any);

export default reducer;
