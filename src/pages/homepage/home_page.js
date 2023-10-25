import React from 'react'
import './home_page.css'
import testImage from '../../assets/test_image.jpg'
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
      <div className='homepage-body-products'>

      </div>
    </div>
  )
}

export default HomePage