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
    <div className='font-bold w-[200px] bg-white p-5 flex-col rounded-lg shadow-md' >
      <img src={img} alt="" 
        className='w-full h-[100px] hover:scale-110 cursor-pointer transition-transform duration-300 rounded-t-lg'
      />

      <div className='text-sm mt-1 mb-2 flex-col'>
        <p className='font-bold p-1'>{name}</p>
        <hr></hr>
        <div className='flex flex-row justify-between p-2'>
        <p className='text-gray-600 text-left'>{rating} unit</p>
        <p className='text-red-500 text-right'>{discount}% OFF</p>
        </div>
        <hr></hr>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-green-500 text-lg font-semibold'>${discountedPrice}</span>
        <button 
          onClick={() => {
            dispatch(addToCart({ id, name, price: discountedPrice, rating, img, qty: 1 }));
            handleToast(name);
          }} 
          className='text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-1.5'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;

