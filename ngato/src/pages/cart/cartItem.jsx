import React,{ useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';



export const CartItem = (props) => {
    const { id, image, title, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <div className='cartItem'>
        <img src={image} />
        <div className='description'>
            <p>
                {' '}
                {title}
            </p>
            <h5>${price}</h5>
            <div className='countHandler'>
                <button className='btn btn-primary' onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button className='btn btn-primary' onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  );
};
