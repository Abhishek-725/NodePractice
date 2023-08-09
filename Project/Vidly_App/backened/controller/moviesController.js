const Movies = require('../model/movies');
const service = require('../services/movieService');

// Get all movies
exports.getMovies = async (req, res, next) => {
  let result = await service.getAllMovie(); //get movie function
  res.status(200).json({data : result});
};

// Insert Movie
exports.createMovie = async (req,res,next) => {
  let data = req.body;
  let result = await service.insertMovie(req,data); //insert movie function
  res.send(result)
}

// Update Movie
exports.upDateMovie = async(req,res,next) => {
  let data = req.body;
  let result = await service.upDateMovie(req,data); //Update movie function
  res.status(200).send('success')
}