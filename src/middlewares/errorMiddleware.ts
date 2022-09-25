import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import ErrorCode from './errorCode';

const errorMiddleware = async (
  err: ErrorCode,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { code, message } = err;
  // console.log(err);
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues[0].message });
  }
  res.status(code || 500).json({ error: message });
};

export default errorMiddleware;
