import React, { useContext } from 'react'
import './shop.css'
import { Items } from './Items'
import { ShopContext } from '../../context/ShopContext'
import { Product } from './product'
  
  
const Shop = () => {

    return (
      <section id='shop'>
        <h5>Ngato || Shoes</h5>
        <h2>Shoes on sale</h2>
  
        <div className='shop__container'> 
            {" "}
            {
                Items.map((product) => (
                    <Product data={product} />
                ))
            }
        </div>
      </section>
    )
}
  
export default Shop