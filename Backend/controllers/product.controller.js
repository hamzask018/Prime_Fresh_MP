import Product from '../models/product.model.js';

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { productName, description, price, categoryId, imageUrl } = req.body;

    const product = new Product({
      productName,
      description,
      price,
      categoryId,
      imageUrl,
    });

    await product.save();
    return res.status(201).json({
      message: 'Product created successfully',
      product,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('categoryId');
    return res.status(200).json({
      products,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error',
      success: false,
    });
  }
};
