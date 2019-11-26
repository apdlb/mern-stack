import Joi from '@hapi/joi';

import { IMetadataObj } from '../interfaces';

/**
 * Helper para la validación con Joi.
 *
 * @param  {Object}  data
 * @param  {Object}  schema
 * @return {Promise}
 */
function validate(data: IMetadataObj, schema: IMetadataObj): Promise<any> {
  const { error } = Joi.object(schema).validate(data);

  if (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(null);
}

export default validate;
