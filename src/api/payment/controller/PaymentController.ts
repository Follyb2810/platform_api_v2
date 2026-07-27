import { Request, Response } from "express";
import { InitializePaymentUseCase } from "../../../application/usecases/payment/InitializePaymentUseCase";
import { PaystackCreateTransactionDto } from "../../../application/Dtos/Paystack/Init";
import { PaystackCreateTransactionSchema } from "../validation/paymentvalidation";

export class PaymentController {
  constructor(private initializePaymentUseCase: InitializePaymentUseCase) {}

  async initializePayment(req: Request, res: Response) {
    try {
      const dto: PaystackCreateTransactionDto =
        PaystackCreateTransactionSchema.parse({
          email: req.body.email,
          amount: req.body.amount,
          callback_url: req.body.callback_url,
          metadata: req.body.metadata,
        });

      const result = await this.initializePaymentUseCase.execute(dto);

      return res.status(200).json(result);
    } catch (err: any) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  }
}
