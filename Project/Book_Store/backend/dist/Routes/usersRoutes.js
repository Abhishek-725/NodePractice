"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_1 = __importDefault(require("../controller/userController"));
const userAuthValidation_1 = require("../utils/Validations/userValidations/userAuthValidation");
const validationError_1 = require("../utils/Validations/validationError");
router
    .route('/')
    .post(userAuthValidation_1.validateRegisterUser, validationError_1.handleValidationErrors, userController_1.default.createUser)
    .get(userController_1.default.getUsers);
// .delete();
exports.default = router;
