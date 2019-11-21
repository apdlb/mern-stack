import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';

import auth from './auth';
import entities from './entities';

const reducer = combineReducers({
  localize: localizeReducer,
  auth,
  entities
} as any);

export default reducer;
