// Install upstash package for a severless database, first create an account with upstash to get a db url and token
// This file connects us to the database we can now call this this anywhwere we need to post get or updata data on the database
import { Redis } from "@upstash/redis";

export const db = new Redis({
    url:process.env.UPSTASH_REDIS_REST_URL,
    token:process.env.UPSTASH_REDIS_REST_TOKEN
})
// export const db = Redis.fromEnv()