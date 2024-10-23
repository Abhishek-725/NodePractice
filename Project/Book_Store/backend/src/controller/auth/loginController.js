const User = require("../../model/Users");
const AppError = require("../../utils/AppError");
const errorWrapper = require("../../utils/errorWrapper");


exports.loginUser = errorWrapper(async (req,res,next) => {
    const {password, mobile} = req.body;
    if(!mobile || !password) return next(new AppError('Insufficient data.',400));
    const userData = await User.findOne({
        
    })
});

exports.registerUser = errorWrapper(async (req,res,next) => {
    const {first_name, last_name, email, mobile, password} = req.body;
    if(!mobile || !password) return next(new AppError('Insufficient data.',400));
    const userData = await User.findOne({
        
    })
});