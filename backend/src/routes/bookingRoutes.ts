import express from 'express';
import { createBooking, getUserBookings } from '../controllers/bookingController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticateJWT, createBooking);
router.get('/', authenticateJWT, getUserBookings);

export default router;
