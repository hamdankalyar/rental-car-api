// @desc    Get all vehicles
// @route   GET /api/v1/vehicles
// @access  Public
exports.getVehicles = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all vehicles',
  });
};

// @desc    Get single vehicle
// @route   GET /api/v1/vehicles/:id
// @access  Public
exports.getVehicle = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show vehicle with id ${req.params.id}`,
  });
};

// @desc    Create new vehicle
// @route   POST /api/v1/vehicles
// @access  Private
exports.createVehicle = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new vehicle',
  });
};

// @desc    Update vehicle
// @route   PUT /api/v1/vehicles/:id
// @access  Private
exports.updateVehicle = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update vehicle with id ${req.params.id}`,
  });
};

// @desc    Delete vehicle
// @route   DELETE /api/v1/vehicles/:id
// @access  Private
exports.deleteVehicle = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete vehicle with id ${req.params.id}`,
  });
};
