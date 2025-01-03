import express from 'express';
const router = express.Router();
import userController from '../controller/userController';
import {validateRegisterUser} from '../utils/Validations/userValidations/userAuthValidation';
import { handleValidationErrors} from '../utils/Validations/validationError';

router
    .route('/')
    .post(validateRegisterUser, handleValidationErrors, userController.createUser)
    .get(userController.getUsers)
    // .delete();

export default router;
    