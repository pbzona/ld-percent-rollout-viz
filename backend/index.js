require('dotenv').config();

// Initialize these early to avoid delays
require('./launchdarkly');
require('./contexts');

const express = require('express');
const cors = require('cors');
const app = express();
const { rolloutHandler }  = require('./handlers');

app.use(cors());

app.get('/', rolloutHandler);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});