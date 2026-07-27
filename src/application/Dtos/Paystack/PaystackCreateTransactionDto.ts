export type PaystackCreateTransactionDto = {
  amount: number;
  email: string;
  callback_url?: string;
  metadata: PaystackMetadata;
};

export type PaystackMetadata = {
  user_id: number;
  product_id: string;
  callback_url?: string;
  custom_fields: PaystackMetadataCustomField[];
};

export type PaystackMetadataCustomField = {
  display_name: string;
  variable_name: string;
  value: string | number;
};

export enum PaymentStatus {
  Paid = "paid",
  NotPaid = "not paid",
}
