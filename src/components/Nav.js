import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useRef } from 'react'

const Nav = ({events_ref,hide,setHide}) => {
  // window.HTMLElement.prototype.scrollIntoView = function() {};
  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementsByClassName('.EventsContainer');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };


  return (
    // hidden?
    (<motion.div className='Nav'
      variants={{
        hidden: {opacity: 0, translateY:-100},
        dropdown:{opacity:1, translateY: 0}
      }}
      initial='hidden'
      animate={hide?"dropdown":""}
      transition={{duration:0.5}}>

        <ul className='navItems'>
            <li className='logoDiv'><Link to='/'><img src={logo}alt="logo" className='Logo' /></Link></li>
            <li className='Home_nav'><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li> 
            {/* <li><Link to='/'>Events</Link></li> */}
            <li>
            <button onClick={() => {events_ref.current?.scrollIntoView({behaviour:'smooth'})}}>Events</button>
            </li>
            <li><Link to='/'>Support Groups</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul> 

    </motion.div>)
    // :(<></>)
  )
}

export default Nav