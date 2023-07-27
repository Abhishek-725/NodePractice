const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');
const {movieValidation} = require('../utils/validation/movieValidation');
const {validationResult} = require('../utils/validation/validationResult');

router.get('/',controller.getMovies);
router.post('/',authUser,checkPermission,upload,controller.createMovie);
router.put('/:id',authUser,checkPermission,upload,movieValidation,validationResult,controller.upDateMovie);

module.exports = router;
