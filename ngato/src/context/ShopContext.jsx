import React, { useState, createContext } from 'react'
import { Items } from '../pages/shop/Items'



export const ShopContext = createContext(null) 

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Items.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = Items.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
            
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount};
    
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider