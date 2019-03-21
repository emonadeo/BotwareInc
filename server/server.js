const express = require('express');
const bodyParser = require('body-parser');

// Routes
const webhooks = require('./webhooks');

const server = express();

// Parse Body to JSON
server.use(bodyParser.json());

// Use Routes
server.use('/webhooks', webhooks);

module.exports = server;
