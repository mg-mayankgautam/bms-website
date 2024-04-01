import React from 'react'
import bee from '../assets/about/bee.svg'
import students from '../assets/about/sudents.jpeg'
import events from '../assets/about/events.jpeg'
import support from '../assets/about/support.jpeg'

const About = () => {
  return (
    <div className='About'>

      <div className='about_child'>
        <div className='aboutHeading'>About The Community</div>
        <img src={bee} className='aboutBee'/>
        <div className='aboutMain'>
            <div className='aboutCards one'>
              <img src={students}/>
              <div className='aboutCardsContent'>
                <div className='aboutCardsHead'>100+</div>
                <div className='aboutCardsText'>Students registered with us.</div>
                </div>
            </div>
            <div className='aboutCards two'>
            <img src={events}/>
            <div className='aboutCardsContent'>
                <div className='aboutCardsHead'>20+</div>
                <div className='aboutCardsText'>events conducted on college campus to foster mental well-being in a span of two years.</div>
                </div>
            </div>
            <div className='aboutCards three'>
            <img src={support}/>
            <div className='aboutCardsContent'>
                <div className='aboutCardsHead'>10+</div>
                <div className='aboutCardsText'>Support Group meetings conducted within the community.</div>
                </div>
            </div>
        </div>
      </div>
     
       </div>
  )
}

export default About