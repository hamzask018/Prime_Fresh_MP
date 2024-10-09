import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData.js'
import toast,{Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'

const FoodItems = () => {

  const category=useSelector((state)=> state.category.category);
  const search = useSelector((state)=>state.search.search)
  
  const handleToast =(name)=>{
    toast.success(`Added ${name}`);
  }
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    <div className='flex flex-wrap gap-4 justify-center lg:justify-center mx-3 my-5'>
        {
            FoodData.filter((food)=> {
              if(category==="ALL"){
                return food.name.toLowerCase().includes(search.toLowerCase());
              }
              else{
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());

              }
            }).map((food)=>{
              return <FoodCard 
              key={food.id} 
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              discount={50}
              handleToast={handleToast}
            />
            })
        }

    </div>
    </>
  )
}

export default FoodItems
