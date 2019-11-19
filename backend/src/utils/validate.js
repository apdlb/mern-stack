import Joi from '@hapi/joi';

/**
 * Helper para la validación con Joi.
 *
 * @param  {Object}  data
 * @param  {Object}  schema
 * @return {Promise}
 */
function validate(data, schema) {
  const { error } = Joi.object(schema).validate(data);

  if (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(null);
}

export default validate;
