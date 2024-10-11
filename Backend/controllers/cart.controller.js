import Cart from '../models/cart.model.js';

export async function createOrUpdateCart(req, res) {
  try {
    const { userId, items, totalPrice, totalQty } = req.body;

    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = items;
      cart.totalPrice = totalPrice;
      cart.totalQty = totalQty;
    } else {
      cart = new Cart({
        userId,
        items,
        totalPrice,
        totalQty,
      });
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function getCart(req, res) {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteCart(req, res) {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOneAndDelete({ userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    res.status(200).json({ success: true, message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}