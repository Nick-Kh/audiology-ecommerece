import { BaseModel } from "./BaseModel";
import { Entity } from "./Entity";

export interface IUser extends BaseModel {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export class IUser extends Entity implements IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface Address {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}