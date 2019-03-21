const express = require('express');

// Routes
const steam = require('./webhooks/steam');

const router = express.Router();

// Register Webhooks
router.post('/steam', steam.serve);

module.exports = router;