/* eslint-disable @typescript-eslint/no-explicit-any */
export type LoginPropsType = {
  email: string;
  password: string;
};
export type ConfirmPassPropsType = {
  password: string;
  confirmPassword: string;
};
export type TUserLoginRes = {
  _id: string;
  image: string;
  warehouses: any[];
  name: string;
  email: string;
  number: string;
  role: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: any;
};
export type TLoginRes = {
  success?: boolean;
  token?: any;
  user?: TUserLoginRes;
};
