const express = require('express');
const router = express.Router();
const controller = require('../controller/auth/loginController');

router
    .route('/login')
    .post(controller.loginUser);

module.exports = router;