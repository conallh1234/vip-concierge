// routes/authRoutes.ts
import express from 'express';
import { login } from '../controllers/authController';

const router = express.Router();

console.log('typeof login:', typeof login); // ⬅️ Should log "function"

router.post('/login', login);

export default router;
