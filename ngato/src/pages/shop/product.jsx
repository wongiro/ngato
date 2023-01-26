import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../context/ShopContext';

export const Product = (props) => {
    const { id, image, title, price } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

  return (
    <div className='container'>
       <article key={id} className='shop__item'>
            <div className='shop__item-image'>
                <img src={image} />
            </div>

            <h3>{title}</h3>
            <h5>{price}</h5>
            <div className='shop__item-cta'>
                <button onClick={() => addToCart(id)} className='btn btn-primary'>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> } </button>
            </div>
        </article>
    </div>
  )
}
