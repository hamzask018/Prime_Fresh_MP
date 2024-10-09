import React, { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totqty, item) => totqty + item.qty, 0);  
  const totalPrice = cartItems.reduce((totprice, item) => totprice + item.qty * item.price, 0);  
  const navigate = useNavigate();

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 bg-white h-full mb-3 
                      ${activeCart ? "translate-x-0" : "translate-x-full"} 
                      transition-all duration-500 z-50 shadow-lg`}>
          <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Orders</span>
            <IoCloseCircle 
              onClick={() => setActiveCart(!activeCart)}
              className='border-2 border-grey-600 font-bold text-gray-600 p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
          </div>
          <div className='overflow-y-auto h-[calc(100%-160px)] scrollbar-hidden'>
            {
              cartItems.length > 0 ? 
              cartItems.map((food) => (
                <ItemCard 
                  key={food.id} 
                  id={food.id}
                  name={food.name} 
                  price={food.price}
                  img={food.img}
                  qty={food.qty}                
                />
              )) : 
              <h2 className='text-center text-xl font-bold text-gray-800'>Your Cart is Empty</h2>
            }
          </div>
          <div className='absolute bottom-0 left-0 w-full bg-white border-t shadow-inner'>
            <div className='flex justify-between px-3 py-2'>
              <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
              <h3 className='font-semibold text-gray-800'>Total Amount: ${totalPrice.toFixed(2)}</h3>
            </div>
            <button 
              onClick={() => navigate("/success")}
              className='bg-green-500 font-bold text-white py-2 rounded-lg w-full mb-5 hover:bg-green-600 transition'>Checkout</button>
          </div>
      </div>
      <FaShoppingCart 
        onClick={() => setActiveCart(!activeCart)} 
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-5 right-5 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />
    </>
  )
}

export default Cart;
