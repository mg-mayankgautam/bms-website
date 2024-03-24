import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = ({hidden,setHidden}) => {
  return (
    // hidden?
    (<motion.div className='Nav'
      variants={{
        hidden: {opacity: 0, translateY:-100},
        dropdown:{opacity:1, translateY: 0}
      }}
      initial='hidden'
      animate={hidden?"dropdown":""}
      transition={{duration:0.5}}>

        <ul className='navItems'>
            <li className='logoDiv'><Link to='/'><img src={logo}alt="logo" className='Logo' /></Link></li>
            <li className='Home_nav'><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li> 
            <li><Link to='/'>Events</Link></li>
            <li><Link to='/'>Support Groups</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul> 

    </motion.div>)
    // :(<></>)
  )
}

export default Nav