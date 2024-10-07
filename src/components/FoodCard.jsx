/* eslint-disable react/prop-types */
/**New Code Below  */
import React from 'react';
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

// eslint-disable-next-line react/prop-types
const FoodCard = ({id, name, price, desc, rating, img, discount, handleToast}) => {
  const dispatch = useDispatch();
  const discountedPrice = (price - (price * (discount / 100))).toFixed(2);

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex-col rounded-lg shadow-md' >
      <img src={img} alt="" 
        className='w-full h-[130px] hover:scale-110 cursor-pointer transition-transform duration-300 rounded-t-lg'
      />

      <div className='text-sm mt-2 mb-3'>
        <p className='font-semibold'>{name}</p>
        <p className='text-gray-500'>{desc.slice(0, 50)}...</p>
        <p className='text-red-500 font-medium'>{discount}% OFF</p>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-green-500 text-lg font-semibold'>${discountedPrice}</span>
        <button 
          onClick={() => {
            dispatch(addToCart({ id, name, price: discountedPrice, rating, img, qty: 1 }));
            handleToast(name);
          }} 
          className='text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-2'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

