import express from 'express';
import { createPayment, getPaymentById } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/create', createPayment);
router.get('/:id', getPaymentById);

export default router;
