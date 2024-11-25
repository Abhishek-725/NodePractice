import express from 'express';
const router = express.Router();
import controller from '../controller/auth/loginController';

router
    .route('/login')
    .post(controller.loginUser);

export default router;