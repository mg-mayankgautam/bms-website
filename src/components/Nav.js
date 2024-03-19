import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className='Nav'>
        <ul className='navItems'>
            <li className='logoDiv'><Link to='/'><img src={logo}alt="logo" className='Logo' /></Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li> 
        </ul>        
    </div>
  )
}

export default Nav