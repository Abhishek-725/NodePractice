class AppError extends Error {
    /***
     * @param statusCode{number}
     * @param msg{string}
     *  */ 
    constructor(
        msg,
        statusCode
    ){
        super(msg);
        this.statusCode = statusCode,
        this.status = `${statusCode}`.startsWith(4) ? 'fail' : 'error',
        this.name = this.constructor.name,
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = AppError;