// src/utils/logger.js
const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../../', 'taskCompletionLog.txt');

const logTaskCompletion = (userId) => {
  const logMessage = `Task completed for user ID: ${userId} at ${new Date().toISOString()}\n`;
  fs.appendFileSync(logFilePath, logMessage);
};

module.exports = { logTaskCompletion };