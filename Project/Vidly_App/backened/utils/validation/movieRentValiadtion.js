const {check} = require('express-validator');
const Users = require('../../model/users');
const moment = require('moment');
const Movies = require('../../model/movies');

exports.movieRentValidation = [
    check('movieId')
    .notEmpty()
    .withMessage('Movie id required.')
    .custom(async(value) =>  {
        let movie = await Movies.findOne({where : {movieId : parseInt(value)}});
        if (!movie) {
            throw new Error("Movie does not exist");
        }
        return true
    }),

    check('userId')
    .notEmpty()
    .withMessage('User id required.')
    .custom(async(value) =>  {
        let user = await Users.findOne({where : { id : parseInt(value)}});
        if (!user) {
            throw new Error("User doesn't exits");
        }
        return true;
    }),

    check('returnDate')
    .notEmpty()
    .withMessage('Date is required')
    .custom((value) => {
        if (!moment(value,"YYYY-MM-DD").isValid()) {
            throw new Error("Enter valid date")
        }
        if (value <= new Date().toISOString().split('T')[0]) {
            throw new Error("Return Date is ahead of rent date.")
        }
        return true
    })

]