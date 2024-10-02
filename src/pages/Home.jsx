
import React from 'react'
import Navbar from '../components/Navbar'
import CategogryMenu from '../components/CategogryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
const Home = () => {
  return (
    <>
    <Navbar/>  
    <CategogryMenu/>
    <FoodItems/>  
    <Cart/>
    </>
  )
}

export default Home
