import React from 'react'
import img1 from '../assets/logo.png'

const Events = () => {
  return (
    <div className='EventsContainer'>
        <div className='Events'>
            <div className='carousel'>
                <div className='eventsHeading'>EVENTS</div>
                <div className='eventsSubHeading'>2023-24</div>
                <div className='bentoGrid'>
                        <div className='event1'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='event2'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='event3'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='event4'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='event5'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='event6'>
                            <img src={img1} alt="" />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events