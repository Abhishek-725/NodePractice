const { check, validationResult } = require('express-validator');
import {Request, Response, NextFunction} from 'express';

// Validation rules for user registration
exports.validateRegisterUser = [
  check('first_name')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2, max : 20 }).withMessage('First name must be at least 2 characters'),
  
  check('last_name')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),
  
  check('email')
    .isEmail().withMessage('Invalid email address'),
  
  check('mobile')
    .notEmpty().withMessage('Mobile number is required')
    .isMobilePhone().withMessage('Invalid mobile number'),
  
  check('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .matches(/\d/).withMessage('Password must contain a number'),
];

// Error handling middleware
exports.handleValidationErrors = (req : Request, res : Response, next : NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
