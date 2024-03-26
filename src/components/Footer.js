import React from 'react'
import footerbg from '../assets/footerbg1.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <img className='footerBg' src={footerbg}/>
        <div className='footerContent'>
            <div className='footerBMS'>BLISSFUL MINDS SOCIETY</div>
        </div>
    </div>
  )
}

export default Footer