import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line react-refresh/only-export-components
const CategorySlice = createSlice({
    name:"category",
    initialState:{
        category:"All",
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category = action.payload;
        }
    },

})

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;