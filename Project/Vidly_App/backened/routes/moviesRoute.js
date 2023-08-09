const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');
const {movieValidation} = require('../utils/validation/movieValidation');
const {validationResult} = require('../utils/validation/validationResult');
const errorWrapper = require('../utils/errorWrapper');

//get all movies
router.get('/',errorWrapper(controller.getMovies));

//insert new movies
router.post('/',authUser,checkPermission,upload,errorWrapper(controller.createMovie));

//update movie by id
router.put('/:id',authUser,checkPermission,upload,movieValidation,validationResult,errorWrapper(controller.upDateMovie));

module.exports = router;
