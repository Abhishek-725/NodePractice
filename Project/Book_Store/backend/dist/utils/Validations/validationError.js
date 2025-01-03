"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationErrors = void 0;
const express_validator_1 = require("express-validator");
// Error handling middleware
const handleValidationErrors = (req, res, next) => {
    var _a;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: (_a = errors === null || errors === void 0 ? void 0 : errors.array()[0]) === null || _a === void 0 ? void 0 : _a.msg });
        return;
    }
    next();
};
exports.handleValidationErrors = handleValidationErrors;
