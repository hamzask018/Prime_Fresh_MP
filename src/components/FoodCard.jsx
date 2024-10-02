import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaS } from 'react-icons/fa6'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';


// eslint-disable-next-line react/prop-types
const FoodCard = ({id,name,price,desc,rating,img,handleToast}) => {
  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 gap-2 flex-col rounded-lg '>
       <img src={img} alt="" 
       
       className='w-100% h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out overflow-hidden'
       />

       <div className='text-sm flex justify-between '>
        <h2>{name}</h2>
        <span className='text-green-500'>${price}</span>
       </div>
       <p className='text-sm font-normal'>{desc}...</p>
       <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
            <FaStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button onClick={()=> {dispatch(
          addToCart({
          id,name,price,rating, img, qty:1
        })
      );
      handleToast(name);
        
        }} className='text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-2'>
            Add to Cart
        </button>
       </div>
    </div>
  )
}

export default FoodCard
