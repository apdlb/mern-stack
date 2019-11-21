import _ from 'lodash';
import { createAction } from 'redux-actions';

import { apiFetch } from '../../api';
import { urlEntities } from '../../api/urls';
import { IMetadataObj } from '../../interfaces';
import CONSTANTS from '../../utils/constants';

const generateFilter = ({ mode = 'paginate', page = 1, pageSize = CONSTANTS.PAGE_SIZE_5, sort, order, ...filters }: IMetadataObj = {}) => {
  let query = '';

  if (mode === 'paginate') {
    query = `${query}&page=${page}`;
    query = `${query}&pageSize=${pageSize}`;
  }

  if (sort && order) {
    query = `${query}&sort=${sort}`;
    query = `${query}&order=${CONSTANTS.ORDER_ANTD_TABLE_ORDER_MAP.get(order)}`;
  }

  if (!_.isEmpty(filters)) {
    for (const key of Object.keys(filters)) {
      if (filters[key]) {
        query = `${query}&${key}=${filters[key]}`;
      }
    }
  }

  return query ? `?${query}` : query;
};

export const cleanEntities = createAction(CONSTANTS.ACTION_CLEAN_ENTITIES, () => {});
export const listEntities = createAction(CONSTANTS.ACTION_LIST_ENTITIES, (filters: IMetadataObj) =>
  apiFetch({ method: CONSTANTS.GET, url: urlEntities + generateFilter(filters) })
);
export const setListEntitiesParams = createAction(CONSTANTS.ACTION_SET_LIST_ENTITIES_PARAMS, (params: IMetadataObj) => params);
export const createEntity = createAction(CONSTANTS.NOTHING_ACTION, (body: IMetadataObj) =>
  apiFetch({ method: CONSTANTS.POST, url: urlEntities, body })
);
export const getEntity = createAction(CONSTANTS.ACTION_GET_ENTITY, (id: string) =>
  apiFetch({ method: CONSTANTS.GET, url: urlEntities, params: [id] })
);
export const updateEntity = createAction(CONSTANTS.NOTHING_ACTION, (id: string, body: IMetadataObj) =>
  apiFetch({ method: CONSTANTS.PATCH, url: urlEntities, params: [id], body })
);
export const deleteEntity = createAction(CONSTANTS.NOTHING_ACTION, (id: string) =>
  apiFetch({ method: CONSTANTS.DELETE, url: urlEntities, params: [id] })
);
