import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHanlder = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  // const placeOrder = async (event) => {
  //   event.preventDefault();
  //   let orderItems = [];
  //   food_list.map((item)=>{
  //     if(cartItems[item._id]>0){
  //       let itemInfo = item;
  //       itemInfo["quantity"] = cartItems[item._id];
  //       orderItems.push(itemInfo);
  //     }
  //   })
  //   let orderData = {
  //     address:data,
  //     items:orderItems,
  //     amount:getTotalCartAmount()+2
  //   }

    // console.log(url);
    // console.log(orderData);
    // console.log(token);
    // let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    // let response = await axios.post(url + "/api/order/place", orderData, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    
  
  //   if(response.data.success){
  //     const {session_url} = response.data;
  //     window.location.replace(session_url);
  //   }
  //   else{
  //     alert("Error");
  //   }
    
  // }

  // const navigate = useNavigate()

  // useEffect(()=>{
  //   if(!token){
  //     navigate('/cart')
  //   }
  //   else if(getTotalCartAmount() === 0){
  //     navigate('/cart')
  //   }
  // },[token])

  const totalAmount = getTotalCartAmount();




  return (
    <form   className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName'   type="text" placeholder='First name' />
          <input required name='lastName'   type="text" placeholder='Last name' />
        </div>
        <input required name='email'   type="email" placeholder='Email address' />
        <input required name='street'   type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city'  type="text" placeholder='City' />
          <input required name='state'   type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode'   type="text" placeholder='Zip code' />
          <input required name='country'  type="text" placeholder='Country' />
        </div>
        <input required name='phone'   type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalAmount===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalAmount===0?0:totalAmount + 2}</b>
            </div>

          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder