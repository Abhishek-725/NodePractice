const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');
const {movieValidation} = require('../utils/validation/movieValidation');
const {validationResult} = require('../utils/validation/validationResult');
const errorWrapper = require('../utils/errorWrapper');

router.get('/',errorWrapper(controller.getMovies));//get all movies

router.post('/',authUser,checkPermission,upload,errorWrapper(controller.createMovie));//insert new movies

router.put('/:id',authUser,checkPermission,upload,errorWrapper(controller.upDateMovie));//update movie by id

module.exports = router;
