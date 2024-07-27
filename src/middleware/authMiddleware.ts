// // src/middleware/authMiddleware.ts
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = 'your_secret_key'; // Use the same secret key as in your login function

// export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };
export {}