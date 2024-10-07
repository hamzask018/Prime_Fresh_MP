import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
    couponCode: { 
        type: String,
         required: true,
          unique: true
         },
    discountType: { 
        type: String,
         enum: ['percentage', 'fixed'], 
         required: true 
        },
    discountAmount: {
         type: Number,
          required: true 
        },
    expiryDate: {
         type: Date,
          required: true
         }
}, { timestamps: true });

export default mongoose.model('Coupon', couponSchema);
