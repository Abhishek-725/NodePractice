const convertImageToUrl = require("../utils/convertImageUrl");
const Movies = require("../model/movies");
module.exports = {
  insertMovie,
  upDateMovie
};

async function insertMovie(req, data) {
  let image = convertImageToUrl(req.file.path);
  let { movieName, movie_type , barCode, stock, rating, rate } = data;
  let result = await Movies.create({
    movieName,
    movie_type,
    barCode,
    stock,
    image,
    rating,
    rate,
  });
  return result;
};


async function upDateMovie(req, data) {
  console.log(req.file);
  let image = convertImageToUrl(req.file.path);
  console.log(image);
  let { movieId , movieName, movie_type , barCode, stock, rating, rate } = data;
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