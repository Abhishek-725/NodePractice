const convertImageToUrl = require("../utils/convertImageUrl");
const Movies = require("../model/movies");
const db = require("../dataBase/pg_promise");
module.exports = {
  insertMovie,
  upDateMovie,
  getAllMovie
};

async function insertMovie(req, data) {
  // convert image path with url
  let image = convertImageToUrl(req.file.path);
  let { movieName, movie_type , barCode, stock, rating, rate } = data;
  // let result = await Movies.create({
  //   movieName,
  //   movie_type,
  //   barCode,
  //   stock,
  //   image,
  //   rating,
  //   rate,
  // });

  await db.proc('insert_movies',
  [movieName, movie_type , barCode, stock, rating, rate ,image]);
  return "Movie added successfully.";
};

// Get all movie from database 
async function getAllMovie(){
  // let result = await Movies.findAll({
  //   attributes: { exclude: ["createdAt", "updatedAt"] },
  // });

  let result = await db.func('get_movies');
  console.log('result',result);
  return result ? result : 'Data not available.';
}

async function upDateMovie(req, data) {
  console.log(req.file);
  let image ;
  if (req.file) {
    image = convertImageToUrl(req.file.path);
  }
  // console.log(image);
  let movieId = req.params.id;
  console.log(movieId);
  let { movieName, movie_type , barCode, stock, rating, rate } = data;
  // let result = await Movies.update({
  //   movieName,
  //   movie_type,
  //   barCode,
  //   stock,
  //   image,
  //   rating,
  //   rate,
  // },
  // {where : {movieId}});
  // return result;
};