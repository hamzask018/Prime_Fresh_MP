import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
     },
    orderDate: {
         type: Date,
          default: Date.now
    },
    shippingAddressId: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Address',
         required: true 
        },
    billingAddressId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Address'
         },
    totalAmount: {
         type: Number,
          required: true 
        },
    orderStatus: { 
        type: String, 
        enum: ['pending', 'shipped', 'delivered', 'canceled'], 
        default: 'pending' 
    },
    paymentStatus: { 
        type: String, 
        enum: ['paid', 'pending', 'refunded'], 
        default: 'pending' 
    }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
