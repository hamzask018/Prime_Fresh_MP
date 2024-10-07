import express from 'express';
import { createOrder, getOrderById, updateOrderStatus } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/:id', getOrderById);
router.patch('/:id', updateOrderStatus);

export default router;
