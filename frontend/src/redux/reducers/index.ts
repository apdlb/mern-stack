import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { auth } from './auth';

const reducer = combineReducers({
  form: formReducer,
  localize: localizeReducer,
  auth
} as any);

export default reducer;
