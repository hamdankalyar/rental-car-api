const express = require('express');
const {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controller/vehicles'); // Make sure the path matches your project structure

const router = express.Router();

// Routes for '/api/v1/vehicles' and '/api/v1/vehicles/:id'
router
  .route('/')
  .get(getVehicles)
  .post(createVehicle);

router
  .route('/:id')
  .get(getVehicle)
  .put(updateVehicle)
  .delete(deleteVehicle);

module.exports = router;
