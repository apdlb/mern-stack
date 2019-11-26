import { DocumentQuery, Model, PaginateModel } from 'mongoose';

import {
  MongooseCreateOptions,
  MongooseFindByIdAndDelete,
  MongooseFindByIdAndUpdate,
  MongooseFindByIdOptions,
  MongooseFindOneOptions,
  MongooseFindOptions,
  MongoosePaginateOptions
} from '../interfaces';

/**
 * Find models
 *
 * @param  {Model}               model
 * @param  {MongooseFindOptions} options
 * @return {DocumentQuery}
 */
export function find(model: Model<any>, { filter, projection, options, callback }: MongooseFindOptions<any>): DocumentQuery<any[], any> {
  // Default sort
  if (options && !options.sort) {
    options.sort = { _id: -1 };
  }

  return model.find(filter, projection, options, callback);
}

/**
 * Find models with pagination
 *
 * @param  {Model}                   model
 * @param  {MongoosePaginateOptions} options
 * @return {Promise}
 */
export function paginate(model: PaginateModel<any>, { query, options, callback }: MongoosePaginateOptions<any>): Promise<any> {
  // Default sort
  if (options && !options.sort) {
    options.sort = { _id: -1 };
  }

  return model.paginate(query, options, callback);
}

/**
 * Find model by id
 *
 * @param  {Model}                   model
 * @param  {MongooseFindByIdOptions} options
 * @return {Promise}
 */
export function findById(model: Model<any>, { id, callback }: MongooseFindByIdOptions<any>) {
  return model.findById(id, callback);
}

/**
 * Find model by one field
 *
 * @param  {Model}                  model
 * @param  {MongooseFindOneOptions} options
 * @return {Promise}
 */
export function findOne(model: Model<any>, { conditions, callback }: MongooseFindOneOptions<any>) {
  return model.findOne(conditions, callback);
}

/**
 * Create new model/s
 *
 * @param  {Model}                 model
 * @param  {MongooseCreateOptions} options
 * @return {Promise}
 */
export function create(model: Model<any>, { docs, options, callback }: MongooseCreateOptions<any>) {
  if (docs && options && callback) {
    return model.create(docs, options, callback);
  } else if (docs && options && !callback) {
    return model.create(docs, options);
  } else if (docs && !options && callback) {
    return model.create(docs, callback);
  } else {
    return model.create(docs);
  }
}

/**
 * Update model
 *
 * @param  {Model}                     model
 * @param  {MongooseFindByIdAndUpdate} options
 * @return {Promise}
 */
export function findByIdAndUpdate(model: Model<any>, { id, update, callback }: MongooseFindByIdAndUpdate<any>) {
  return model.findByIdAndUpdate(id, update, callback);
}

/**
 * Delete model
 *
 * @param  {Model}                     model
 * @param  {MongooseFindByIdAndDelete} options
 * @return {Promise}
 */
export function findByIdAndDelete(model: Model<any>, { id, callback }: MongooseFindByIdAndDelete<any>) {
  return model.findByIdAndDelete(id, callback);
}
