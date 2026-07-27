import { Router } from "express";
import { PaystackGateway } from "../../infrastructure/payment/PaystackGateway";
import { InitializePaymentUseCase } from "../../application/usecases/payment/InitializePaymentUseCase";
import { PaymentController } from "./controller/PaymentController";

const paymentGateway = new PaystackGateway();
const initializePaymentUseCase = new InitializePaymentUseCase(paymentGateway);
const paymentController = new PaymentController(initializePaymentUseCase);

const router = Router();

router.post("/initialize", (req, res) =>
  paymentController.initializePayment(req, res),
);

export default router;
