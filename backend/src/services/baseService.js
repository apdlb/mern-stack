/**
 * Find models
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function find(model, { filter, projection, options, callback }) {
  return model.find(filter, projection, options, callback);
}

/**
 * Find models with pagination
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function paginate(model, { query, options, callback }) {
  return model.paginate(query, options, callback);
}

/**
 * Find model by id
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function findById(model, { id, projection, options, callback }) {
  return model.findById(id, projection, options, callback);
}

/**
 * Find model by one field
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function findOne(model, { conditions, projection, options, callback }) {
  return model.findOne(conditions, projection, options, callback);
}

/**
 * Create new model/s
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function create(model, { docs, options, callback }) {
  return model.create(docs, options, callback);
}

/**
 * Update model
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function findByIdAndUpdate(model, { id, update, options, callback }) {
  return model.findByIdAndUpdate(id, update, options, callback);
}

/**
 * Delete model
 *
 * @param  {Object} model
 * @param  {Object} options
 * @return {Promise}
 */
export function findByIdAndDelete(model, { id, options, callback }) {
  return model.findByIdAndDelete(id, options, callback);
}
