import { Request, Response, NextFunction } from 'express';

interface responseType  {
  status : number,
  data? : any,
  message? : string,
  error? : any
};
class ResponseHandler {
    /**
     * @param {response} res 
     * @param {data} data
     * @param {error} error
     * @param {status} statusCode
     * @param {message} message 
     * @returns 
     */

    static send(res : Response, options : any) {
      const { status = 200, data, message = '', error = '' } = options;
  
      const response: responseType = {
        status: status,
      };
  
      if (data) {
        response.data = data;
      }
  
      if (message) {
        response.message = message;
      }
  
      if (error) {
        response.error = error;
      }
  
      return res.status(status).json(response);
    }
  
    static success(res : Response, data : any, statusCode = 200, message = 'Success') {
      return this.send(res, { status: statusCode, data, message });
    }
  
    static error(res : Response, error : any ,  statusCode = 500, message = 'Error') {
      return this.send(res, { status: statusCode, error, message });
    }
  
    static validationError(res : Response, validationErrors : any,  statusCode = 422, message = 'Validation error') {
      return this.send(res, { status: statusCode, error: validationErrors, message });
    }
  
  }
  
  export default ResponseHandler;
  