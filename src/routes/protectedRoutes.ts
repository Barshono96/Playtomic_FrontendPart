// src/routes/protectedRoutes.ts
import express from 'express';
// import { authenticateToken } from '../middleware/authMiddleware';
const router = express.Router();

// router.get('/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'This is a protected route' });
// });

export default router;
