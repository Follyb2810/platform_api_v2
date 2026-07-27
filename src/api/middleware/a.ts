// import { Request, Response } from "express";
// import { InitializePaymentUseCase } from "../../application/usecases/InitializePaymentUseCase";
// import {
//   PaystackCreateTransactionDto,
//   PaymentStatus,
// } from "../../application/dtos/PaystackCreateTransactionDto";

// export class PaymentController {
//   constructor(private initializePaymentUseCase: InitializePaymentUseCase) {}

//   async initializePayment(req: Request, res: Response) {
//     try {
//       // Access the file uploaded
//       const file = req.file;
//       if (!file) {
//         return res.status(400).json({ error: "File is required" });
//       }

//       // Manual validation for other fields
//       const { email, amount, metadata, payment_status } = req.body;
//       if (!email || !amount) {
//         return res.status(400).json({ error: "Email and amount are required" });
//       }

//       // Normalize enum
//       let status: PaymentStatus;
//       const rawStatus = payment_status?.toLowerCase();
//       switch (rawStatus) {
//         case "paid":
//           status = PaymentStatus.Paid;
//           break;
//         case "not paid":
//         case "notpaid":
//           status = PaymentStatus.NotPaid;
//           break;
//         default:
//           return res.status(400).json({ error: "Invalid payment_status" });
//       }

//       // Map to Application DTO
//       const dto: PaystackCreateTransactionDto = {
//         email,
//         amount: Number(amount),
//         callback_url: req.body.callback_url,
//         metadata: JSON.parse(metadata), // if sent as JSON string
//         payment_status: status,
//         file, // include the file if needed in UseCase
//       };

//       // Call UseCase
//       const result = await this.initializePaymentUseCase.execute(dto);

//       return res.status(200).json(result);
//     } catch (err: any) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   }
// }


// router.post("/initialize", upload.single("file"), (req, res) =>
//   paymentController.initializePayment(req, res)
// );