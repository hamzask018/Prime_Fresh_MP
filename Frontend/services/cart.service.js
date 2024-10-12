import axios from 'axios';

const API_URL = "http://localhost:5000/api/cart"; 

export const getCartItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

export const addItemToCart = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
};

export const updateCartItem = async (itemId, qty) => {
  try {
    const response = await axios.patch(`${API_URL}/${itemId}`, { qty });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const deleteCartItem = async (itemId) => {
  try {
    const response = await axios.delete(`${API_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting cart item:", error);
    throw error;
  }
};
