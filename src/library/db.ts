// Install upstash package for a severless database, first create an account with upstash to get a db url and token
import { Redis } from "@upstash/redis";
export const db = Redis.fromEnv()