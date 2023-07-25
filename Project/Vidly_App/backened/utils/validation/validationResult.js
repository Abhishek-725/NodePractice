const {validationResult} = require('express-validator');

exports.validationResult = (req,res,next) =>{
    const errors = validationResult(req).errors;
    if (errors.length > 0) {
        res.status(400).json({
            message : errors[0].msg
        })
    } else {
        next();
    }
}