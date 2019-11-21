import { handleActions } from 'redux-actions';

import CONSTANTS from '../../utils/constants';

const initialValues = {
  paginateEntities: {},
  paginateEntitiesParams: {},
  entity: {}
};
const entities = handleActions(
  {
    [CONSTANTS.ACTION_CLEAN_ENTITIES]: () => initialValues,
    [CONSTANTS.ACTION_LIST_ENTITIES]: (state, action) => ({ ...state, paginateEntities: action.payload }),
    [CONSTANTS.ACTION_SET_LIST_ENTITIES_PARAMS]: (state, action) => ({ ...state, paginateEntitiesParams: action.payload }),
    [CONSTANTS.ACTION_GET_ENTITY]: (state, action) => ({ ...state, entity: action.payload })
  },
  initialValues
);

export default entities;
