import axios from "axios";
import {
  IPaymentInit,
  PaymentGateway,
  VerifyPaymentResult,
} from "../../core/interface/gateway/PaymentGateway";

export class PaystackGateway implements PaymentGateway {
  async initializePayment(data: IPaymentInit) {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: data.email,
        amount: data.amount * 100,
        reference: data.reference,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
      },
    );

    return {
      authorizationUrl: response.data.data.authorization_url,
    };
  }

  async verifyPayment(reference: string): Promise<VerifyPaymentResult> {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
      },
    );

    return {
      isSuccessful: response.data.data.status === "success",
    };
  }
}
