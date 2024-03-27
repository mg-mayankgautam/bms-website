import React from 'react'
import footerbg from '../assets/footerbg1.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
    <div className='Footer'>
        {/* <img className='footerBg' src={footerbg}/> */}
        <div className='footerjoinUs'>
          <div className='joinUs'>
            <h1>Join our community!</h1>
            <div>perferendis cum velit labore perspiciatis repellendus ea quidem qui distinctio id earum odio vel necessitatibus natus, nulla, accusamus quis voluptas rerum dicta vero. Temporibus </div>
            <button>ask a question</button>
          </div>
          <div></div>
        </div>
        <div className='footerContent'>
          <div className='footerAnchors'>
              <div>Home</div>
              <div>About</div>
              <div>Contact Us</div>
              <div>Support Groups</div>
              <div>Events</div>
          </div>
          <div className='footerBMS'>BLISSFUL MINDS SOCIETY</div>
        </div>
    </div>
    </div>
  )
}

export default Footer