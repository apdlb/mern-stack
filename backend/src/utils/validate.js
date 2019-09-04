import Joi from '@hapi/joi';

/**
 * Helper para la validación con Joi.
 *
 * @param  {object}  data
 * @param  {object}  schema
 * @return {Promise}
 */
function validate(data, schema) {
  return Joi.validate(data, schema, { abortEarly: false }, err => {
    if (err) {
      return Promise.reject(err);
    }

    return Promise.resolve(null);
  });
}

export default validate;
