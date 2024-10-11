import { Router } from 'express';
const router = Router();
import { createOrUpdateCart, getCart, deleteCart } from '../controllers/cart.controller.js';

router.post('/', createOrUpdateCart);
router.get('/:userId', getCart);
router.delete('/:userId', deleteCart);

export default router;