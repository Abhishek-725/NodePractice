import express from 'express';
const router = express.Router();
import userController from '../controller/userController';

router
    .route('/')
    .post(userController.createUser)
    .get(userController.getUsers)
    // .delete();

export default router;
    