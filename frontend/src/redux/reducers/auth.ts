import { handleActions } from 'redux-actions';

import CONSTANTS from '../../utils/constants';

const initialValues = {
  token: null
};
export const auth = handleActions(
  {
    [CONSTANTS.ACTION_CLEAN_AUTH]: () => initialValues,
    [CONSTANTS.ACTION_LOGIN]: (state, action) => ({ ...state, token: action.payload })
  },
  {}
);
