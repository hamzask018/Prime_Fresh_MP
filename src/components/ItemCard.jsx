import React from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart , incrementQty,decrementQty} from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
const ItemCard = ({id,name,price,img,qty}) => {
   
  const dispatch=useDispatch();

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdOutlineDelete 
        onClick={()=> {
          dispatch(removeFromCart({id,img,name,price,qty}));

          toast(`${name} Removed`,{
            icon:"👋",
          })
        }}

        className='absolute right-7 cursor-pointer text-gray-600'
        ></MdOutlineDelete>
        <img src={img} alt="img" 
        
        className='w-[50px] h-[50px] '
        />      
        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div className='flex justify-between' >
                <span className='text-green-500 font-bold'>${price}</span>
               <div className='flex justify-center items-center gap-2 absolute right-7'>
                <AiOutlineMinus
                onClick={()=> qty> 1? dispatch(decrementQty({id})): qty=0 }
                className='norder-2 border-grey-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                <span>{qty}</span>
                <AiOutlinePlus 
                 onClick={()=> qty >= 1? dispatch(incrementQty({id})): qty=0 }
                className='norder-2 border-grey-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
