const express = require('express');
const router = express.Router();
const userRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');

router.route('/auth',authRoutes);
router.use('/users',userRoutes);

module.exports = router;