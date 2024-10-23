class ResponseHandler {
    /**
     * @param {response} res 
     * @param {data} data
     * @param {error} error
     * @param {status} statusCode
     * @param {message} message
     * @returns 
     */

    static send(res, options) {
      const { status = 200, data, message = '', error = '' } = options;
  
      const response = {
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
  
    static success(res, data, statusCode = 200, message = 'Success') {
      return this.send(res, { status: statusCode, data, message });
    }
  
    static error(res, error,  statusCode = 500, message = 'Error') {
      return this.send(res, { status: statusCode, error, message });
    }
  
    static validationError(res, validationErrors,  statusCode = 422, message = 'Validation error') {
      return this.send(res, { status: statusCode, error: validationErrors, message });
    }
  
  }
  
  module.exports = ResponseHandler;
  