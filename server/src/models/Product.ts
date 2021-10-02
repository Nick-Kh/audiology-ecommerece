import { ObjectId } from "bson";
import { BaseModel } from "./BaseModel";
import { Entity } from "./Entity";
import { Review } from "./Review";

export interface IProduct extends BaseModel {
  user: ObjectId;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
}

export class Product extends Entity implements IProduct {
  user: ObjectId;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number = 0;
  numReviews: number = 0;
  price: number = 0;
  countInStock: number = 0;
  reviews: Review[] = [];
}