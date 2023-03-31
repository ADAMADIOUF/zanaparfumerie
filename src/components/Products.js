import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Products = () => {
 const{products}=useGlobalContext()
  return (
    <div className='products'>
      <div className=' section-center'>
        <div className='title products-title'>
          <h3>les plus populaires</h3>
        </div>
        <div className="products-container">
         {products.slice(0,6).map((product)=>{
          const{id,title,img}=product
          return (
            <div key={id} className='product-details'>
              <a href={`/product/${id}`}>
                <img src={img} alt='' />
              </a>
              <h3>{title}</h3>
            </div>
          )
         })}
        </div>
      </div>
    </div>
  )
}

export default Products