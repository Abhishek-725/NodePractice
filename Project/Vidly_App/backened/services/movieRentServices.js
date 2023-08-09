const sequelize = require("../dataBase/connection");
const Movies = require("../model/movies");
const MovieRented = require("../model/moviesRented");


module.exports = {
    insertMovieRent

}

async function insertMovieRent(data){
    const t = await sequelize.transaction();
    let {movieId , userId , returnDate } = data;
    await MovieRented.create({
        movieId,
        userId,
        returnDate
    },{transaction : t});
    await Movies.decrement('stock',{by : 1,where : {movieId}},{transaction : t});
    await t.commit();
    return "Rent Movie added successfully.";
}