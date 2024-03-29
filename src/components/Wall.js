import React, { useState } from 'react'

const Wall = ({scrollvar}) => {

    const [style, setStyle] = useState();

    if(scrollvar>500){
        
    }

  return (
    <div className='Wall'>
        <div className='wallTextDiv'>
            <div className='wallText' style={{animation: 'scale-in linear forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                Community Wall
            </div>
            {/* <div className='wallCardsDiv'> */}
                    <div className='wallCards un' style={{animation: 'slide-in-un 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}></div>
                    <div className='wallCards deux'  style={{animation: 'slide-in-deux 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}></div>
                    <div className='wallCards trois'  style={{animation: 'slide-in-trois 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}></div>
                    <div className='wallCards quatre'  style={{animation: 'slide-in-quatre 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}></div>
                    <div className='wallCards cinq'  style={{animation: 'slide-in-cinq 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}></div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Wall