import { PaymentGateway } from "../../../core/interface/PaymentGateway";

export class VerifyPaymentUseCase {
  constructor(private paymentGateway: PaymentGateway) {}

  async execute(reference: string) {
    const result = await this.paymentGateway.verifyPayment(reference);

    if (!result.isSuccessful) {
      throw new Error("Payment failed");
    }

    return "Payment verified";
  }
}
