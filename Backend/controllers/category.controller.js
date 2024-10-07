import Category from '../models/category.model.js';

export const createCategory = async (req, res) => {
  try {
    const { categoryName, parentCategoryId, description } = req.body;

    const category = new Category({
      categoryName,
      parentCategoryId,
      description,
    });

    await category.save();
    return res.status(201).json({
      message: 'Category created successfully',
      category,
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

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      categories,
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
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedCategory) {
      return res.status(404).json({
        message: 'Category not found',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Category updated successfully',
      category: updatedCategory,
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

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({
        message: 'Category not found',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Category deleted successfully',
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
