import React from 'react'
import "./product.css"
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import watch1 from '../../assets/watch1.jpg'
const Product = () => {
  return (
    <div className='product-container'>
      <img className='product-img' src={watch1}/>
      <div className='product-information'>
        <p>Gold Standard</p>
        <p>$110.99</p>
        <div>
          <p>Rating: 2.5</p>
          {/* list of ratings with starts based off ratings */}
          <BsStarFill className='star-full'/>
          <BsStarHalf className='star-half-full'/>
          <BsStar className='star-empty'/>
        </div>
        <button className='product-details-button'>Details</button>
      </div>
    </div>
  )
}

export default Product