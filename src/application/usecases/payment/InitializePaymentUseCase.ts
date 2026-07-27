import {
  IPaymentInit,
  PaymentGateway,
} from "../../../core/interface/PaymentGateway";
import { PaystackCreateTransactionDto } from "../../Dtos/Paystack/Init";

export class InitializePaymentUseCase {
  constructor(private paymentGateway: PaymentGateway) {}

  async execute(input: PaystackCreateTransactionDto) {
    const response = await this.paymentGateway.initializePayment({
      email: input.email,
      amount: input.amount,
      reference: "generated-ref-123",
    });

    return response;
  }
}
