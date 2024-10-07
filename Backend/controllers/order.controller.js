import Order from '../models/order.model.js';

// Create a new order
export const createOrder = async (req, res) => {
    try {
        const { userId, shippingAddressId, billingAddressId, totalAmount } = req.body;
        const order = await Order.create({
            userId,
            shippingAddressId,
            billingAddressId,
            totalAmount,
            orderStatus: 'pending',
            paymentStatus: 'pending'
        });
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get an order by ID
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
    try {
        const { orderStatus } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { orderStatus }, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order updated', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
