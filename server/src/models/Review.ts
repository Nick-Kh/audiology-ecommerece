import { BaseModel } from "./BaseModel";
import { Entity } from "./Entity";

export interface IReview extends BaseModel {
  name: string;
  rating: number;
  comment: string;
}

export class Review extends Entity implements IReview {
  name: string;
  rating: number = 0;
  comment: string;
}