const express = require('express');
const router = express.Router();
const rateLimiter = require('../middleware/rateLimiter');
const { addTaskToQueue } = require('../services/taskService');

router.post('/', rateLimiter, (req, res) => {
    const { userId } = req.body;
    const taskPromise = addTaskToQueue(userId);

    taskPromise
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;