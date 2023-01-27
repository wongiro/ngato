import React,{ useContext } from 'react'
import { Items } from '../shop/Items'
import { ShopContext } from '../../context/ShopContext'
import { CartItem } from './cartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div className='conatiner cart'>
      <div>
        <h2>Your Cart Items</h2>
      </div>
      <div className='cart'>
        {Items.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data ={product}/>;
          }
        })}
      </div>
{totalAmount > 0 ?
      <div className='checkout'>
        <h3>SubTotal: ${totalAmount}</h3>
        <button className='btn btn-primary' onClick={() => navigate("/")}>Still Shopping?</button>
        <button className='btn btn-primary'>Checkout</button>
      </div>
: <h5>Your cart IS EMPTY</h5> }
    </div>
  )
}

export default Cart