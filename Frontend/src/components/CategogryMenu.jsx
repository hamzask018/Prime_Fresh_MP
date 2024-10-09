import React, { useEffect, useState } from 'react';
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategogryMenu = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategories);  
    }

    // Set the default category to "ALL" when the component mounts
    useEffect(() => {
        listUniqueCategories();
        dispatch(setCategory("ALL"));
    }, [dispatch]);

    return (
        <div className='mx-6'>
            <div className='my-5 flex justify-left pl-20'>
                <div className='flex gap-2 flex-wrap'>
                    <button
                        onClick={() => dispatch(setCategory("ALL"))}
                        className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "ALL" && "bg-green-500 text-white"}`}>
                        ALL
                    </button>
                    
                    {categories.map((category, index) => (
                        <button
                            onClick={() => dispatch(setCategory(category))}
                            key={index}
                            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategogryMenu;
