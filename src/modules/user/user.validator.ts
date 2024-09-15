import { Request, Response, NextFunction } from 'express';

// Validation middleware to check user input
export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
