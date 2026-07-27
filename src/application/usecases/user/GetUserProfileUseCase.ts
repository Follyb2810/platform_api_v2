// // application/usecases/GetUserProfileUseCase.ts
// import { CacheGateway } from "../../core/services/CacheGateway";
// import { UserRepository } from "../../core/repositories/UserRepository";

// export class GetUserProfileUseCase {
//   constructor(
//     private cache: CacheGateway,
//     private userRepository: UserRepository,
//   ) {}

//   async execute(userId: string) {
//     const cacheKey = `user:${userId}`;
//     let user = await this.cache.get(cacheKey);

//     if (!user) {
//       user = await this.userRepository.findById(userId);
//       if (user) await this.cache.set(cacheKey, user, 3600); // cache 1 hour
//     }

//     return user;
//   }
// }
