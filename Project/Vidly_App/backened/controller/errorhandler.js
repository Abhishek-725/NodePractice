module.exports = async(err,req,res,next) => {
    if (err) {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'error';

        res.status(err.statusCode).json({
            status: err.status,
            message : err.message
        });
        // process.exit(1);
    }
};