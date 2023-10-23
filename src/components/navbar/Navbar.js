import React, {useState} from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
const Navbar = () => {
  const [automaticsHover,setAutomaticsHover] = useState(false)
  const [quartsHover,setQuartsHover] = useState(false)
  const [specialEditionHover,setSpecialEditionHover] = useState(false)
  const [menuType,setMenuType] = useState('')

  const NavbarHoverMenu = ({type}) => {
    return (
      <div className='NavbarHoverMenu-container' onMouseLeave={() => {displayHoverMenu('')}}>
          {
              type === 'Automatics' &&
              <div className='NavbarHoverMenu-body'>
                  <div>
                      <h2>Gender</h2>
                      <p className='NavbarHoverMenu-p'>Men's</p>
                      <p className='NavbarHoverMenu-p'>Women's</p>
                  </div>
                  <div>
                      <h2>Band Material</h2>
                      <p className='NavbarHoverMenu-p'>Leather</p>
                      <p className='NavbarHoverMenu-p'>Silicon</p>
                      <p className='NavbarHoverMenu-p'>Rubber</p>
                      <p className='NavbarHoverMenu-p'>Metal</p>
                  </div>
              </div>
  
          }
          {
              type === 'Quarts' &&
              <div className='NavbarHoverMenu-body'>
                  <div>
                      <h2>Gender</h2>
                      <p className='NavbarHoverMenu-p'>Men's</p>
                      <p className='NavbarHoverMenu-p'>Women's</p>
                  </div>
                  <div>
                      <h2>Band Material</h2>
                      <p className='NavbarHoverMenu-p'>Leather</p>
                      <p className='NavbarHoverMenu-p'>Silicon</p>
                      <p className='NavbarHoverMenu-p'>Rubber</p>
                      <p className='NavbarHoverMenu-p'>Metal</p>
                  </div>
              </div>
  
          }
          {
              type === 'Special Edition' &&
              <div className='NavbarHoverMenu-body'>
                  <div>
                      <h2>Gender</h2>
                      <p>Men's</p>
                      <p>Women's</p>
                  </div>
                  <div>
                      <h2>Band Material</h2>
                      <p>Leather</p>
                      <p>Silicon</p>
                      <p>Rubber</p>
                      <p>Metal</p>
                  </div>
              </div>
  
          }
      </div>
    )
  }

  return (
    <div className='navbar-container'> 
        <div>
            Logo
        </div>
        <div className='navbar-middle'>
            <p id='Automatics' onClick={() => {displayHoverMenu('Automatics')}} >Automatics</p>
            <p id='Quarts' onClick={() => {displayHoverMenu('Quarts')}} >Quarts</p>
            <p id='Special Edition' onClick={() => {displayHoverMenu('Special Edition')}} >Special Edition</p>
        </div>
        {
          menuType !== '' &&
          <NavbarHoverMenu type={menuType}/>
        }
        <div className='navbar-right-side'>
            <div className='shopping-cart'><AiOutlineShoppingCart/></div>
            <div className='profile'><BsPerson/></div>
        </div>
    </div>
  )
  
  function displayHoverMenu(menuType){
    switch (menuType){
      case "Automatics":
        var el = document.getElementById(menuType)
        el.style.color = 'red'
        el = document.getElementById("Special Edition")
        el.style.color = 'black'
        el = document.getElementById("Quarts")
        el.style.color = 'black'
        setAutomaticsHover(true)
        setQuartsHover(false)
        setSpecialEditionHover(false)
        setMenuType(menuType)
        break;
      case "Quarts":
        var el = document.getElementById(menuType)
        el.style.color = 'red'
        el = document.getElementById("Special Edition")
        el.style.color = 'black'
        el = document.getElementById("Automatics")
        el.style.color = 'black'
        setAutomaticsHover(false)
        setQuartsHover(true)
        setSpecialEditionHover(false)
        setMenuType(menuType)
        break;
      case "Special Edition":
        var el = document.getElementById(menuType)
        el.style.color = 'red'
        el = document.getElementById("Automatics")
        el.style.color = 'black'
        el = document.getElementById("Quarts")
        el.style.color = 'black'
        setAutomaticsHover(false)
        setQuartsHover(false)
        setSpecialEditionHover(true)
        setMenuType(menuType)
        break;
      default:
        var el = document.getElementById('Automatics')
        el.style.color = 'black'
        el = document.getElementById('Quarts')
        el.style.color = 'black'
        el = document.getElementById('Special Edition')
        el.style.color = 'black'
        setAutomaticsHover(false)
        setQuartsHover(false)
        setSpecialEditionHover(false)
        setMenuType(menuType)
    }
  }
  
}

export default Navbar
