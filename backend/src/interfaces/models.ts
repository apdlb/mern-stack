export interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
  surname?: string;
  role: string;
}

export interface IEntity {
  field1: string;
  field2?: number;
  field3?: boolean;
}
