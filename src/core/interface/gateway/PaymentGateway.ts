export interface IPaymentInit {
  email: string;
  amount: number;
  reference: string;
}

export interface VerifyPaymentResult {
  isSuccessful: boolean;
}

export interface PaymentGateway {
  initializePayment(data: IPaymentInit): Promise<{ authorizationUrl: string }>;
  verifyPayment(reference: string): Promise<VerifyPaymentResult>;
}
