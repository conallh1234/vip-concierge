import express from 'express';
import { createBooking, getUserBookings } from '../controllers/bookingController';
import authenticateUser from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticateUser, createBooking);
router.get('/', authenticateUser, getUserBookings);

export default router;
