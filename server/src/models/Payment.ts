export interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

export enum PaymentMethod {
  paypal = "paypal"
}