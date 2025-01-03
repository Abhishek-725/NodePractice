import { Request, Response, NextFunction } from "express";
import {  validationResult } from "express-validator";
// Error handling middleware
export const handleValidationErrors  = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors?.array()[0]?.msg });
     return;
  }
  next();
};
