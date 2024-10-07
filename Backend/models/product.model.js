import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true, 
    trim: true, 
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
export default Product;
