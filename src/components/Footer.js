import React from 'react'
import footerbg from '../assets/footer/footerbg.png'
import ig from '../assets/footer/ig.png'
import linkedin from '../assets/footer/linkedin.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
    <div className='Footer'>
        <div className='footerjoinUs'>
          <div className='joinUs'>
            <h1>Join our community!</h1>
            <div>Be a part of a community that cares! Join Blissful Minds Society today and help us in creating a community that aims at ending stigma and fostering acceptance around mental health and well-being.</div>
            <button>ask a question</button>
          </div>
          <div></div>
        </div>

        <div className='footerContent'>
          {/* <div className='footerAnchors'>
              <div>Home</div>
              <div>About</div>
              <div>Contact Us</div>
              <div>Support Groups</div>
              <div>Events</div>
          </div> */}
          <div className='footerContact'>Contact Us</div>
          <div className='footerLinks'>
            <img src={ig} className='footerIcons'/>
            <img src={linkedin} className='footerIcons'/>
          </div>
          <div className='footerCopyright'>copyright © blissfulmindssociety</div>
          <div className='footerBMS'><img className='' src={footerbg}/></div>
        </div>
    </div>
    </div>
  )
}

export default Footer