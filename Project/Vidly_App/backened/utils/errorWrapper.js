const CustomError = require('../utils/CustomError');

module.exports =  (func) => {
    return  async (req,res,next) => {
        func(req,res,next).catch((err) => {
            console.log("Error wrap: ",err);
            let error = new CustomError(err.message , 400);
            next(error);
        })
    }
}