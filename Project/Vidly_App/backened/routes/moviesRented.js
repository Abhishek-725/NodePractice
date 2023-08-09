const express = require('express');
const router = express.Router();
const authUser = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');
const {validationResult} = require('../utils/validation/validationResult');
const errorWrapper = require('../utils/errorWrapper');
const controller = require('../controller/moviesRentedController');
const {movieRentValidation} = require('../utils/validation/movieRentValiadtion');

// Add rent movie
router.post('/',movieRentValidation,validationResult,errorWrapper(controller.createMovie))

module.exports = router;