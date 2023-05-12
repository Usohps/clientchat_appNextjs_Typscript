// Install upstash package for a severless database, first create an account with upstash to get a db url and token
import { Redis } from "@upstash/redis";
export const db = Redis.fromEnv()
// export const db = new Redis({
//     url: process.env.UPSTASH_REDIS_REST_URL,
//     token: process.env.UPSTASH_REDIS_REST_TOKEN
// })