// src/services/taskService.js
const Queue = require('bull');
const redisConfig = require('../config/redisConfig');
const { logTaskCompletion } = require('../utils/logger');

const userTaskQueue = new Queue('userTasks', {
  redis: {
    host: redisConfig.options.host,
    port: redisConfig.options.port,
  },
});

userTaskQueue.process(async (job, done) => {
  logTaskCompletion(job.data.userId);
  done();
});

const addTaskToQueue = async (userId) => {
  await userTaskQueue.add({
    userId,
  });

  return { message: `Task received for user ID: ${userId}` };
};

module.exports = { addTaskToQueue };