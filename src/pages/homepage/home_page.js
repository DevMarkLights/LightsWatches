import React from 'react'
import './home_page.css'
import testImage from '../../assets/test_image.jpg'
import Product from '../../components/product/product'
import FilterSort from '../../components/filter/filterSort'
const HomePage = () => {
  return (
    <div className='homepage-container'>
      <div className='homepage-header-img-container'>
        <img className='homepage-header-img' src={testImage}/>
        <img className='homepage-header-img' src={testImage}/>
        <img className='homepage-header-img' src={testImage}/>
        <img className='homepage-header-img' src={testImage}/>
      </div>
      <p className='homepage-header-text'>Lights Watches</p>
      <FilterSort/>
      <div className='homepage-body-products'>
        <Product/>
      </div>
    </div>
  )
}

export default HomePage