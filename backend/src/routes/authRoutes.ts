// routes/authRoutes.ts
import express from 'express';
import { login, register } from '../controllers/authController';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

console.log('typeof login:', typeof login); // ⬅️ Should log "function"

router.post('/login', login);
router.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('phone').notEmpty(),
  ],
  validateRequest,  // Custom middleware to handle validation errors
  register
);

export default router;
