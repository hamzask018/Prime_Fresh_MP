/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react"


export const StoreContext=createContext();

const StoreContextProvider=(props)=>{
   
    const [cartItems,setCartItems]=useState({});
    const url ="https://prime-fresh-mp.onrender.com";
    const [token,setToken] = useState("");
    const [food_list,setFoodList]=useState([]);
    


    const addToCart= async (itemId)=>{
          if(!cartItems[itemId]){
            setCartItems((prev)=>({
                ...prev,[itemId]:1
            }))
          }
          else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          }

          if(token){
            await axios.post(url+"/api/cart/add",{itemId},
            {headers:{token}})
          }
    } 

    const removeFromCart= async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));

        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},
            {headers:{token}})
          }

    }
    
    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = food_list.find((product) => product._id === item)
    //             totalAmount += itemInfo.price * cartItems[item]
    //         }
    //     }
    //     return totalAmount;
    // }
const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo && itemInfo.price) {  
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    const fetchFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }
    const loadCartData = async (token) => {
        const response = await axios.get(url+"/api/cart/get",{headers:{token}});
        setCartItems(response.data.cartData);
    }


//     useEffect(()=>{
// console.log(cartItems);
//     },[cartItems])
    useEffect(()=>{
         
          async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
              }
          }
          loadData();
    },[]) //when we refresh still o am loggedIn

    const contextValue={
       food_list ,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       url,
       token,
       setToken
    }
   
    return (
        <StoreContext.Provider value={contextValue}>
       {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

