"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let msg = err.message || 'Something went wrong';
    if (err) {
        return res.status(statusCode).json({
            status: statusCode,
            error: msg
        });
    }
};
