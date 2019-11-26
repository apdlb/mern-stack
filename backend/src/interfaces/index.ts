import mongodb from 'mongodb';
import { PaginateOptions, PaginateResult, QueryFindOneAndRemoveOptions, QueryFindOneAndUpdateOptions, SaveOptions } from 'mongoose';

export interface MongooseFindOptions<T> {
  filter: any;
  projection?: any | null;
  options?: any | null;
  callback?: (err: any, res: T[]) => void;
}

export interface MongoosePaginateOptions<T> {
  query?: object;
  options?: PaginateOptions;
  callback?: (err: any, result: PaginateResult<T>) => void;
}

export interface MongooseFindByIdOptions<T> {
  id: any | string | number;
  callback?: (err: any, res: T | null) => void;
}

export interface MongooseFindOneOptions<T> {
  conditions: any;
  callback?: (err: any, res: T | null) => void;
}

export interface MongooseCreateOptions<T> {
  docs: any[];
  options?: SaveOptions;
  callback?: (err: any, res: T[]) => void;
}

export interface MongooseFindByIdAndUpdate<T> {
  id: any | number | string;
  update: any;
  callback?: (err: any, res: T) => void;
}

export interface MongooseFindByIdAndDelete<T> {
  id: any | number | string;
  callback?: (err: any, res: mongodb.FindAndModifyWriteOpResultObject<T | null>) => void;
}

export interface IMetadataObj {
  [key: string]: any;
}

export interface ITokenPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}
