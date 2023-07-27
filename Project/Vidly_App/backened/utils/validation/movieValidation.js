const { query } = require('express');
const {check, param} = require('express-validator');

exports.movieValidation = [
  param('id')
    .notEmpty()
    .withMessage('Id is required')
    .isNumeric()
    .withMessage("Id must be number"),

  check('movieName')
    .notEmpty()
    .withMessage("Movie name is required")
    .isString()
    .withMessage("Movie name must be string"),
];