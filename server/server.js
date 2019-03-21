const express = require('express');
const bodyParser = require('body-parser');

// Routes
const webhooks = require('./webhooks');

const server = express();

// Parse Body to JSON
server.use(bodyParser.json());

// Use Routes
server.use('/webhooks', webhooks);

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`SERVER: Listening on port ${PORT}`);
});
