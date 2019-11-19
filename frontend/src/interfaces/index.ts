import { PaginationConfig } from 'antd/lib/table';

export interface IMetadataObj {
  [key: string]: any;
}

export interface IApiFetch {
  method: string;
  url: string;
  body?: object;
  params?: string | string[];
  file?: boolean;
  formData?: FormData;
}

export interface IErrorControl {
  props: any;
  err: any;
  redirect?: boolean;
}

export interface IPropsTable {
  data: any[];
  pagination?: PaginationConfig | false;
  loading?: boolean;
  handleOnChange?: any;
}

export interface IError {
  code: number;
  message: string;
  details?: IDetailError[];
}

export interface IDetailError {
  message: string;
  [key: string]: any;
}
