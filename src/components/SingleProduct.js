import React, { useState } from 'react'
import {MdWhatsapp} from "react-icons/md"
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleProduct = () => {
 const{products}=useGlobalContext()
 const {id}= useParams()
 const product = products.filter((product) => {
   return product.id === id
 })
 
  return (
    <div className='single-product'>
     {product.map((product)=>{
      const{title,id,img}=product
      return (
        <div key={id} className='single-product-details'>
          <Link to={`/shop`}>
            <button className='btn'>boutique</button>
          </Link>
          <div className='single-product-content'>
            <img src={img} alt='' />
            <h3>{title}</h3>
          </div>
          <div className='whatsapp'>
            <Link to={`https://wa.me/221775552646`}>
              <MdWhatsapp />
            </Link>
          </div>
        </div>
      )
     })}
    </div>
  )
}

export default SingleProduct