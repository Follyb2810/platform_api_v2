### Application/usecases Orchestration logic

**UseCase** | Encapsulates a **single piece of business logic**, representing an action your application can perform.           eg: `InitializePaymentUseCase`, `UploadUserAvatarUseCase` 

**Service**  Encapsulates **shared logic or utilities** that multiple UseCases might need. It’s **not a single action**, more like a reusable helper in the business domain.  `PaymentValidationService`, `FileProcessingService`   
