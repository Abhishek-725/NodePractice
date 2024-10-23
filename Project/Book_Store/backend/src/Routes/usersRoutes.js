const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');

router
    .route('/')
    .post(controller.createUser)
    .get(controller.getUsers)
    // .delete();

module.exports = router;
    