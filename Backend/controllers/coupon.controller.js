import Coupon from '../models/coupon.model.js';

// Create a new coupon
export const createCoupon = async (req, res) => {
    try {
        const { couponCode, discountType, discountAmount, expiryDate } = req.body;
        const coupon = await Coupon.create({ couponCode, discountType, discountAmount, expiryDate });
        res.status(201).json({ message: 'Coupon created', coupon });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a coupon by code
export const getCouponByCode = async (req, res) => {
    try {
        const coupon = await Coupon.findOne({ couponCode: req.params.code });
        if (!coupon) return res.status(404).json({ message: 'Coupon not found' });
        res.status(200).json(coupon);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
