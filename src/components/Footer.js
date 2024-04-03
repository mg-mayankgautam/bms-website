import React from 'react'
import footerbg from '../assets/footer/footerbg.png'
import footerbgm from '../assets/footer/footerbg_m.png'
import ig from '../assets/footer/ig.png'
import linkedin from '../assets/footer/linkedin.png'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = ({contact_ref}) => {
  return (
    <div className='footerContainer' >
    <div className='Footer' ref={contact_ref}>
        <div className='footerjoinUs'>
          <div className='joinUs'>
            <h1>Join our community!</h1>
            <div>Be a part of a community that cares! Join Blissful Minds Society today and help us in creating a community that aims at ending stigma and fostering acceptance around mental health and well-being.</div>
            <button>ask a question</button>
          </div>
          <div></div>
        </div>

        <div className='footerContent'>
          <div className='footerCopyright' style={{textAlign:'left'}}>

            <div className='footerContact'>Contact Us</div>
              <div className='footerLinks'>
                {/* <Link to='https://www.instagram.com/blissfulminds_bvcoe/' target='_blank'><img src={ig} className='footerIcons'/></Link> */}
                <Link to='https://www.instagram.com/p/C48WDEcSKzm/' target='_blank'><img src={ig} className='footerIcons'/></Link>
                <Link to='https://www.linkedin.com/company/blissful-minds-society/' target='_blank'><img src={linkedin} className='footerIcons'/></Link>
            </div>
          {/* <img src={logo} className='footerLogo'/> */}
              <div>© 2024 Blissful Minds Society. All Rights Reserved</div>
          </div>
          

          <div className='footerCredits'>
              <div>Developed & Designed by :</div>
              <div className='footerCreditsNames'>
                  <div>Mayank</div><div>Tushar</div><div>Mansha</div>
              </div> 
          </div>
          <div className='footerBMS'><img className='footerbgdesk' src={footerbg}/><img className='footerbgmobile' src={footerbg}/></div>
        </div>

        <div className='footerContent_mobile'>
          {/* <div className='footerAnchors'>
              <div>Home</div>
              <div>About</div>
              <div>Contact Us</div>
              <div>Support Groups</div>
              <div>Events</div>
          </div> */}
          <div className='footerContact'>Contact Us</div>
          <div className='footerLinks'>
            {/* <Link to='https://www.instagram.com/blissfulminds_bvcoe/' target='_blank'><img src={ig} className='footerIcons'/></Link> */}
            <Link to='https://www.instagram.com/p/C48WDEcSKzm/' target='_blank'><img src={ig} className='footerIcons'/></Link>
            <Link to='https://www.linkedin.com/company/blissful-minds-society/' target='_blank'><img src={linkedin} className='footerIcons'/></Link>
          </div>
          <div className='footerCopyright'>
            <div>© 2024 Blissful Minds Society. All Rights Reserved</div> 
            <div>Developed & Designed by Mayank, Mansha & Tushar</div>
            </div>
          <div className='footerBMS'><img className='' src={footerbg}/></div>
        </div>
    </div>
    </div>
  )
}

export default Footer