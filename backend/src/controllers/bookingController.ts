import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const createBooking = async (req: Request, res: Response) => {
  const { dropOff, pickup } = req.body;
  const userId = (req as any).user?.userId;

  try {
    const booking = await prisma.booking.create({
      data: {
        userId,
        dropOff: new Date(dropOff),
        pickup: new Date(pickup),
      },
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

export const getUserBookings = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;

  try {
    const bookings = await prisma.booking.findMany({ where: { userId } });
    res.json(bookings);
  } catch {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
};
