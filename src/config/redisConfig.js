const Redis = require('ioredis');
const { REDIS_HOST, REDIS_PORT } = process.env;

const redisClient = new Redis(REDIS_PORT, REDIS_HOST);

module.exports = redisClient;