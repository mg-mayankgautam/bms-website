import React, {useState, useEffect}from 'react';
import { color, motion,useMotionValueEvent,useScroll  } from "framer-motion"
import illustration from '../assets/Group 30.svg'
import SVGillus from './SVGillus';

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
  const text=' Popularly abbreviated as BMS and founded in 2022, is the first student         '
  const text2= '-led Mental Health society at Bharati Vidyapeeth’s College of' 
  const text3= 'Engineering and IP University. The main purpose of BMS is to'
  const text4='advocate the cause of spreading awareness about mental health'
  const text5='issues and encourage people to look beyond the stigma associated'
  const text6= 'with this sensitive subject. The vision of our society is to create a safe'
  const text7='space for all, such that under no circumstance, a student feels'
  const text8='hesitant to talk about his/her mental health issues. We aim to'
  const text9='destigmatize mental illness by conducting interactive and fun'
  const text10='sessions, wherein the students can feel heard and can be given useful '
  const text11='advice.'
  
  
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
            
            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.3}}
              >  
                    {text.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.3}}
              >  
                    {text2.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.5}}
              >  
                    {text3.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>
            
            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.5}}
              >  
                    {text5.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>
            
            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.7}}
              >  
                    {text4.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>
            
            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.7}}
              
              >  
                    {text6.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.9}}
              
              >  
                    {text7.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 0.9}}
              
              >  
                    {text8.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 1.1}}
              
              >  
                    {text9.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 1.15}}
              
              >  
                    {text10.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>

            <motion.p 
              initial='hidden' 
              animate= {hide? 'visible':''}
              transition={{staggerChildren: 0.01,delayChildren: 1.2}}
              
              >  
                    {text11.split('').map(char=>
                    <motion.span variants={defaultAnimation} >
                      {char}
                    </motion.span>
                    )}
                
            </motion.p>
           
          </div>

          {/* <img src={illustration} className='mainImg'/> */}
          <div className='mainImg'><SVGillus/></div>

        </motion.div>
    </div>
  )
}

export default Welcome