import React, { useState, createContext } from 'react'
import { Items } from '../pages/shop/shop'



export const ShopContext = createContext(null) 

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Items.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState();

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] + 1}))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart};
    console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider