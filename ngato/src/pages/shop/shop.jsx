import React from 'react'
import './shop.css'
import shoe from '../../assets/shoe.jpeg'
import chels from '../../assets/chels.jpeg'
import nike from '../../assets/nike.jpeg'
import boots from '../../assets/boots.jpeg'


/*const Shop  = () => {
  return (
    <div> Shop </div>
  )
}

export default Shop 
*/

const data = [
    {
      id: 1,
      image: nike,
      title: 'Vans',
      price: 'shs 8000 UGX'
    },
    {
      id: 1,
      image: nike,
      title: 'Chelsea Boots',
      price: 'shs 8000 UGX',
     
    },
    {
      id: 1,
      image: nike,
      title: 'Nike Airmaxes',
      price: 'shs 8000 UGX'
    },
    {
        id: 1,
        image: nike,
        title: 'Nike Airmaxes',
        price: 'shs 8000 UGX'
    },
    {
        id: 1,
        image: nike,
        title: 'Nike Airmaxes',
        price: 'shs 8000 UGX'
    },
    {
      id: 1,
      image: nike,
      title: 'Nike Air Zoom',
      price: 'shs 8000 UGX',
    }
  ]
  
  
  const Shop = () => {
    return (
      <section id='shop'>
        <h5>Ngato || Shoes</h5>
        <h2>Shoes on sale</h2>
  
        <div className='container shop__container'>
  
          {
            data.map(({id, image, title, price, demo}) => {
              return (
                <article key={id} className='shop__item'>
                  <div className='shop__item-image'>
                    <img src={image} />
                  </div>
  
                  <h3>{title}</h3>
                  <h5>{price}</h5>
                  <div className='shop__item-cta'>
                    <button target="_blank" className='btn btn-primary'>Add to Cart</button>
                  </div>
                </article>
              )
            })
          } 
        </div>
      </section>
    )
  }
  
  export default Shop