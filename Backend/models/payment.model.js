import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    orderId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Order',
          required: true 
        },
    paymentMethod: {
         type: String,
          enum: ['credit card', 'PayPal', 'bank transfer'], 
          required: true 
        },
    transactionId: {
         type: String,
          required: true 
        },
    paymentAmount: {
         type: Number,
          required: true 
        },
    paymentDate: {
         type: Date,
          default: Date.now
         },
    paymentStatus: { 
        type: String, 
        enum: ['completed', 'failed', 'refunded'], 
        required: true 
    }
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
