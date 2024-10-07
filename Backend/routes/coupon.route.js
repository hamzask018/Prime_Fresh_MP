import express from 'express';
import { createCoupon, getCouponByCode } from '../controllers/coupon.controller.js';

const router = express.Router();

router.post('/create', createCoupon);
router.get('/:code', getCouponByCode);

export default router;
