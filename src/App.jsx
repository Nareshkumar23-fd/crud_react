import React, { useState } from 'react'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom"
import CartList from './pages/CartList'
import { toast } from 'react-toastify'


const App = () => {
  const [cartItems, setCartItems] = useState([])



  const addToCart = (item) => {
    setCartItems([...cartItems, item])
    // console.log(setCartItems, "ad")
    toast.success("CART ADDED SUCCESSFULLY!")
  }

  
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
    // console.log("deleted successfully")
    toast.success("DELETED SUCCESSFULLY!")
  }


  //   if()
  // console.log("error")






  return (
    <div className='w-full h-[945px] px-20 py-10 bg-white text-black'>
      <NavBar cartCount={cartItems.length} />
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} />} />
        <Route path='/cartlist' element={<CartList cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  )
}

export default App
