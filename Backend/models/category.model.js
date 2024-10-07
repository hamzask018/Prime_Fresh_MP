import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
  },
  parentCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
