import Payment from '../models/payment.model.js';

// Create a new payment
export const createPayment = async (req, res) => {
    try {
        const { orderId, paymentMethod, transactionId, paymentAmount, paymentStatus } = req.body;
        const payment = await Payment.create({
            orderId,
            paymentMethod,
            transactionId,
            paymentAmount,
            paymentStatus
        });
        res.status(201).json({ message: 'Payment processed', payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get payment details by ID
export const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
