class AppError extends Error {

    public statusCode: number;
    public status: string;
    /***
     * @param statusCode{number}
     * @param msg{string}
     *  */ 
    constructor(
        msg : string,
        statusCode : number
    ){
        super(msg);
        this.statusCode  = statusCode,
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error',
        this.name = this.constructor.name,
        Error.captureStackTrace(this,this.constructor);
    }
}

export default AppError;