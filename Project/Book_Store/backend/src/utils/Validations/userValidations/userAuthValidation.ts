import { check } from 'express-validator';

// Validation rules for user registration
export const validateRegisterUser = [
  check('first_name')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2, max: 20 }).withMessage('First name must be between 2 and 20 characters'),

  check('last_name')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters'),

  check('email')
    .notEmpty().withMessage('E-mail is required')
    .isEmail().withMessage('Invalid email address'),

  check('mobile')
    .notEmpty().withMessage('Mobile number is required')
    .isMobilePhone('any').withMessage('Invalid mobile number'),

  check('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .matches(/\d/).withMessage('Password must contain a number')
    .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain a special character'),

  // check('profile_pic')
  //   .notEmpty().withMessage('Profile picture is required'),

  check('state_id')
    .notEmpty().withMessage('State is required')
    .isNumeric().withMessage('State ID must be a number'),

  check('district_id')
    .notEmpty().withMessage('District is required')
    .isNumeric().withMessage('District ID must be a number'),

  check('city_id')
    .notEmpty().withMessage('City is required')
    .isNumeric().withMessage('City ID must be a number'),
];
