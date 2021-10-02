import { ObjectId } from "bson";
import { BaseModel } from "./BaseModel";
import { Entity } from "./Entity";
import { PaymentMethod, PaymentResult } from "./Payment";
import { Address } from "./User";

export interface IOrder extends BaseModel {
  user: ObjectId;
  orderItems: OrderItem[];
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  paymentResult: PaymentResult;
}

export interface OrderItem {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: ObjectId;
} 

export class Order extends Entity implements IOrder {
  user: ObjectId;
  orderItems: OrderItem[];
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  paymentResult: PaymentResult;
  taxPrice: number;
  shipping_price: number;
  total_price: number;
  isPaid: boolean = false;
  paid_at: Date;
  is_delivered: boolean = false;
  delivered_at: Date;
}
