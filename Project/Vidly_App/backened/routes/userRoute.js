const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const upload = require('../middleware/imageUpload');
const authUser = require('../middleware/userAuth');
const checkPermission = require('../middleware/checkPermission');
const errorWrapper =  require('../utils/errorWrapper');

router.post('/login',controller.login);

router.post('/',upload,controller.createNewUser);

router.get('/',authUser,controller.viewUsers);

router.get('/phone',authUser,checkPermission,errorWrapper(controller.customer));

module.exports = router;