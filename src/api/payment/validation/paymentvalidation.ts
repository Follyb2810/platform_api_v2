import { z } from "zod";
import {
  PaystackCreateTransactionDto,
  PaystackMetadata,
  PaystackMetadataCustomField,
} from "../../../application/Dtos/Paystack/PaystackCreateTransactionDto";

export const PaystackMetadataCustomFieldSchema: z.ZodType<PaystackMetadataCustomField> =
  z.object({
    display_name: z.string(),
    variable_name: z.string(),
    value: z.union([z.string(), z.number()]),
  });

export const PaystackMetadataSchema: z.ZodType<PaystackMetadata> = z.object({
  user_id: z.number(),
  product_id: z.string(),
  callback_url: z.string().optional(),
  custom_fields: z.array(PaystackMetadataCustomFieldSchema),
});

export const PaystackCreateTransactionSchema: z.ZodType<PaystackCreateTransactionDto> =
  z.object({
    amount: z.number().min(1),
    email: z.email(),
    callback_url: z.string().optional(),
    metadata: PaystackMetadataSchema,
    // payment_status: z
    //   .string()
    //   .transform((val) => val.toLowerCase())
    //   .refine((val) => val === "paid" || val === "not paid", {
    //     message: "Invalid payment_status value",
    //   }),
  });
