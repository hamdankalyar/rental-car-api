const express = require('express');
const dotenv = require('dotenv');

//Route files
const vehicles = require('./routes/vehicles.js');

// load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/api/v1/vehicles', vehicles);

const PORT = process.env.PORT || 6000;

app.listen(
  PORT,
  console.log(
    `Server in ${process.env.NODE_ENV} running on the port ${PORT}`
  )
);
