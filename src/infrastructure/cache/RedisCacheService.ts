// infrastructure/cache/RedisCacheService.ts
// import { createClient } from "redis";
import { CacheGateway } from "../../core/services/CacheGateway";

export class RedisCacheService implements CacheGateway {
  //   private client = createClient({ url: process.env.REDIS_URL });

  constructor() {
    // this.client.connect().catch(console.error);
  }

  async get<T>(key: string): Promise<T | null> {
    // const data = await this.client.get(key);
    // return data ? (JSON.parse(data) as T) : null;
    return null;
  }

  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    // await this.client.set(key, JSON.stringify(value), {
    //   EX: ttlSeconds,
    // });
  }

  async delete(key: string): Promise<void> {
    // await this.client.del(key);
    return;
  }
}
