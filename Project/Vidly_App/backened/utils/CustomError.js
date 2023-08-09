class CustomError extends Error{
    statusCode;
    status;
    isOpeartional;

    constructor(message , statusCode ) {
        super(message);
        this.statusCode = statusCode || 500;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
        this.isOpeartional = true;
        Error.captureStackTrace(this,this);
    }
}

module.exports = CustomError;
 