```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma migrate reset
rm -rf prisma/migrations
npx prisma generate
npx prisma migrate dev --name init_postgres

npx prisma migrate dev --create-only --name init
npx prisma migrate deploy


npx prisma db pull     # Sync schema from the DB
npx prisma generate    # Regenerate Prisma client
npx prisma studio      # Open GUI to inspect
npx prisma validate    # to validate
npx prisma db push     # Updates the database schema to match your Prisma models without running destructive migrations.
npx prisma db push --preview-feature # Preview changes first

```

```
Infrastructure  →  Core
Application     →  Core
API             →  Application


| Layer                           | Responsibility                                                                         |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| **Controller / API layer**      | Validate and normalize incoming HTTP request data. Transform it into Application DTOs. |
| **Application / UseCase layer** | Pure business logic. Assumes input is valid. Calls Core interfaces / gateways.         |
| **Core layer**                  | Abstract contracts, entities, enums, domain rules. No knowledge of HTTP or Express.    |
| **Infrastructure layer**        | Implements Core interfaces (e.g., calls Paystack).                                     |

```

# platform_api_v2

```bash
git filter-branch --force --index-filter \
"git rm --cached --ignore-unmatch src/shared/utils/sendMail.ts" \
--prune-empty --tag-name-filter cat -- --all

```

src/
├── application/
│ ├── use_cases/ # Application-specific business rules and orchestration
│ └── services/ # Application services (e.g., security tools interfaces)
├── domain/
│ ├── entities/ # Enterprise-wide business rules and core models
│ └── repositories/ # Interfaces/contracts for data access (implementation is in infrastructure)
├── infrastructure/
│ ├── api/ # Routes, middleware, controllers, and entry points
│ ├── db/ # Database connections, models, and concrete repository implementations
│ ├── logging/ # Logging setup and tools
│ └── utils/ # Shared utilities and external drivers
├── interfaces/
│ ├── controllers/ # Handles HTTP requests/responses and calls use cases
│ └── presenters/ # Data formatting for the UI (less common in pure API projects)
├── main/ # Where everything is wired together (dependency injection)
└── tests/ # Unit and integration tests

core/
entities/
interfaces/
PaymentGateway.ts
OrderRepository.ts
services/
PaymentDomainService.ts

application/
dtos/
usecases/
InitializePaymentUseCase.ts

infrastructure/
prisma/
repositories/
payment/
PaystackGateway.ts

api/
controllers/
routes/

Domain / Core

What it contains: Entities, Enums, Interfaces (business rules)

Purpose: Defines the core logic and contracts of the system

Key point: Independent of frameworks, DBs, or HTTP

2️⃣ Application

What it contains: Use Cases, DTOs, business orchestration

Purpose: Coordinates domain logic to perform tasks

Key point: Depends only on Domain interfaces, not on infrastructure

3️⃣ Infrastructure

What it contains: Database, JWT, external APIs, file storage

Purpose: Implements Domain interfaces with real technologies

Key point: Outer layer that fulfills contracts defined by Domain

4️⃣ Presentation / API

What it contains: Controllers, Routes, Middleware

Purpose: Handles HTTP requests/responses and user input

Key point: Calls Application use cases and injects infrastructure
# platform_api
