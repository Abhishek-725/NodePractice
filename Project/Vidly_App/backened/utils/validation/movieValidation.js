const { query } = require('express');
const {check} = require('express-validator');

exports.movieValidation = [
  check('movieId')
    .notEmpty()
    .withMessage("Id required.")
    .isNumeric()
    .withMessage("Id must be number"),
  check('movieName')
    .notEmpty()
    .withMessage("Movie name is required")
    .isString()
    .withMessage("Movie name must be string"),
];