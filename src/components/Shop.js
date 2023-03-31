import React from 'react'
import { Link } from 'react-router-dom'
import s from "../assets/shop.mp4"
import { useGlobalContext } from '../context'
const Shop = () => {
 const { products } = useGlobalContext()
  return (
    <div className='shop'>
      <article className='home-video'>
        <video autoPlay loop muted poster='' onCanPlayThrough={() => {}}>
          <source src={s} type='video/webm' />
        </video>
      </article>
      <div className='shop'>
        <div className=' section-center'>
          <div className='title shop-title'>
            <h3>boutique</h3>
          </div>
          <div className='products-container'>
            {products.map((product) => {
              const { id, title, img } = product
              return (
                <div key={id} className='product-details'>
                  <a  href={`/product/${id}`}>
                    <img src={img} alt='' />
                  </a>
                  <h3>{title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop