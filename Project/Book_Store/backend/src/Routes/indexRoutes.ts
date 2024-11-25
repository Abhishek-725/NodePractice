import express from 'express';
const router = express.Router();
import userRoutes from './usersRoutes';
import authRoutes from './authRoutes';

router.use('/auth',authRoutes);
router.use('/users',userRoutes);

export default router;