import React, { useEffect, useState } from 'react'
import bee from '../assets/about/bee.svg'
import students from '../assets/about/sudents.jpeg'
import events from '../assets/about/events.jpeg'
import support from '../assets/about/support.jpeg'

const About = ({about_ref, scrollvar}) => {

  const [classname, setclassname] = useState('')

  useEffect(()=>{
    if(scrollvar>70){
      const cards = document.querySelectorAll('.aboutCardsHead')
      cards[0].classList.add('one');
      cards[1].classList.add('two');
      cards[2].classList.add('three');

    }
  }, [scrollvar])

  return (
    <div className='About' ref={about_ref}>

      <div className='about_child'>
        <div className='aboutHeading'>About The Community</div>
        <img src={bee} className='aboutBee'/>
        <div className='aboutMain'>
            <div className='aboutCards'>
              <img src={students}/>
              <div className='aboutCardsContent'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>Students registered with us.</div>
                </div>
            </div>
            <div className='aboutCards'>
              <img src={events}/>
              <div className='aboutCardsContent'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>events conducted on college campus to foster mental well-being in a span of two years.</div>
                </div>
            </div>
            <div className='aboutCards'>
              <img src={support}/>
              <div className='aboutCardsContent'>
                <div className='aboutCardsHead'></div>
                <div className='aboutCardsText'>Support Group meetings conducted within the community.</div>
                </div>
            </div>
        </div>
      </div>
     
       </div>
  )
}

export default About