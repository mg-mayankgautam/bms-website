import React, {useEffect, useState} from 'react'
import img1 from '../assets/logo.png'
import {motion} from 'framer-motion'

const Events = ({events_ref,scrollvar}) => {

    const [inView, setInView] = useState(false);

    useEffect(()=>{
        document.querySelector('.Events').style.setProperty("--scroll", (scrollvar))
        if(scrollvar>=200){setInView(true)}
      },[scrollvar])

  const slideAnimation = {
    // hidden:{
    //     opacity:0,
    //     x:"-50%"
    // },
    visible:{
        opacity:1,
        x:"0", y:'0'
    },
    transition:{duration:1, type:"easeInOut"}
}


  return (
    <div ref={events_ref} className='EventsContainer'>
        <div className='Events'>
            <div className='carousel'>
                <div className='eventsHeading'>EVENTS</div>
                <div className='eventsSubHeading'>2023-24</div>
                <div className='bentoGrid'>
                        <motion.div className='event1' variants={slideAnimation}
                            initial={{opacity:0, x:'-50%', y:'-50%'}}
                            animate={inView?"visible":""}
                            transition={slideAnimation.transition}
                        >
                            <img src={img1} alt="" />
                        </motion.div>

                        <motion.div className='event2' variants={slideAnimation}
                            initial={{opacity:0, x:'50%', y:'-50%'}}
                            animate={inView?"visible":""}
                            transition={slideAnimation.transition}
                        >
                            <img src={img1} alt="" />
                        </motion.div>

                        <motion.div className='event3' variants={slideAnimation}
                            initial={{opacity:0, x:'0', y:'0'}}
                            animate={inView?"visible":""}
                            transition={slideAnimation.transition}
                        >
                            <img src={img1} alt="" />
                        </motion.div>

                        <motion.div className='event4' variants={slideAnimation}
                            initial={{opacity:0, x:'50%', y:'0'}}
                            animate={inView?"visible":""}
                            transition={slideAnimation.transition}
                        >
                            <img src={img1} alt="" />
                        </motion.div>

                        <motion.div className='event5' variants={slideAnimation}
                            initial={{opacity:0, x:'-50%', y:'50%'}}
                            animate={inView?"visible":""}
                            transition={slideAnimation.transition}
                        >
                            <img src={img1} alt="" />
                        </motion.div>

                        <motion.div className='event6' variants={slideAnimation}
                            initial={{opacity:0, x:'50%', y:'50%'}}
                            animate={inView?"visible":""}
                            transition={slideAnimation.transition}
                        >
                            <img src={img1} alt="" />
                        </motion.div>
                </div>
            </div>
        </div>
        <div className='FacultyHeadingLayer'>
            <div></div>
            <div>
            <div className='facultyHeading'>
            Meet Our Faculty Coordinator
            </div>
            <div className='facultyText'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga autem repellat itaque, sequi reiciendis, reprehenderit suscipit ipsam cum distinctio dolores assumenda unde esse sunt. Iusto tenetur laudantium optio perferendis cum velit labore perspiciatis repellendus ea quidem qui distinctio id earum odio vel necessitatibus natus, nulla, accusamus quis voluptas rerum dicta vero. Temporibus laudantium totam cumque nesciunt veritatis veniam magnam optio sint molestiae, ipsam eveniet officia tempore consequuntur atque ex distinctio, expedita dicta consectetur dolores ea. Itaque ipsa quibusdam praesentium consequatur illo. Deserunt, voluptatem nulla cum necessitatibus consequatur officia? Qui tempora quaerat similique ea temporibus ut. Cumque vero deleniti molestias magni.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Events