const Movies = require('../model/movies');
const services = require('../services/movieRentServices');

// Insert rent movies
exports.createMovie = async (req,res,next) => {
    let result = await services.insertMovieRent(req.body);
    res.status(200).json({message : result})
}

