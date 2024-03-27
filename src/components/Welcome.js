import React, {useState, useEffect}from 'react';
import { color, motion,useMotionValueEvent,useScroll  } from "framer-motion"
import illustration from '../assets/illus.png'

const Welcome = ({hide,setHide, scrollvar}) => {
  // const { scrollY } = useScroll();
  // // const [hidden, setHidden] = useState(false)
  // // var scroll = 100-scrollYProgress;
  
  // useMotionValueEvent(scrollY,"change",(latest)=>{
  //   const previous = scrollY.getPrevious();
  // })
  useEffect(()=>{
    document.querySelector('.Welcome').style.setProperty("--scroll", Math.min(scrollvar, 100))
    // console.log(Math.min(scrollvar, 100))
    if(scrollvar>=1){setHide(true)}
  },[scrollvar])

  const defaultAnimation = {hidden:{opacity:0,y:"25%"},visible:{opacity:1,y:"0%"}}

  const heading ='Keeping Mental Health in Check'
  const text=' funsi bansi chal lor Lorem ipsum dolor sit amet consectetur'
  const text2= 'Temporibus iusto natus eaque perferendis. Ratione vero' 
  const text3= 'architecto itaque veniam nihil voluptates, explicabo '
  const text4='Quam, modi Natus, vel? Modi ut in, ipsum quia eligendi'
  const text5=' voluptate perspiciatis debitis officiis blanditiis fugiat vel'
  const text6= 'Praesentium earum molestias asperiores eum, eligendi'
  
  
  return (
    <div className='Welcome'>
        <motion.div className='welcomeText'
        variants={{fade:{opacity: 0},visible:{opacity: 1}}}
        initial='visible'
        animate={hide?"fade":""}
        transition={{duration:0.5}}
        > 
        hello and welcome
        </motion.div>

        <motion.div 
          className='Main'
          variants={{fade:{opacity: 0},show:{opacity: 1}}}
          initial='fade'
          animate={hide?"show":"fade"}
          transition={{duration:0.5}}
        >  
        
          <div className="mainWritten">
            
            <motion.h1 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.1}}
              className='mainHeading'
              >  
                    {heading.split('').map(char=>
                    <motion.span  variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                   
            </motion.h1>
            
            <motion.div 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.3}}
              >  
                    {text2.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.div>

            <motion.div 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.5}}
              >  
                    {text3.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.div>
            
            <motion.div 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.7}}
              >  
                    {text5.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.div>
            
            <motion.div 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.9}}
              >  
                    {text4.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.div>
            
            <motion.div 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 1.1}}
              
              >  
                    {text6.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.div>
           
          </div>

          <img src={illustration} className='mainImg'/>
    
        </motion.div>
    </div>
  )
}

export default Welcome