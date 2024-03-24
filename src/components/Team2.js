import React from 'react'
import image1 from '../assets/Tran.png'
import { useRef, } from "react";
import { motion, useScroll,useMotionValueEvent,useInView } from "framer-motion";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Team2 = () => {
  const ref = useRef(null);
 

const horizontalAnimation = {
  noFocus: { opacity: 0.8 }, 
  focus: {opacity: 1,scaleY:1.3, scaleX:1.3, zIndex:21}, 
  vp: {margin:"0px -70% 0px -48%"},
  duration: {duration:0.1}
}

let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

const settings = {
    arrows:true,
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className='Team'>
        <h2>Meet the Team</h2>
        <div className='slider-container' >
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}> 
            {/* <div  className='teamMember_dummy'>
                
            </div>
            <div  className='teamMember_dummy'>
                
            </div> */}
            <motion.div  className='teamMember'
              >
                {/* <img src={image1} alt="" /> */}
                A
            </motion.div>
            <motion.div className='teamMember'
              
              >B
            </motion.div>
            <motion.div className='teamMember'
             >
                C
            </motion.div>
            <motion.div className='teamMember'
              >
                D
            </motion.div>
            <motion.div className='teamMember' 
              
            >
              E
            </motion.div>
            <motion.div className='teamMember' 
              
            >
              F***
            </motion.div>
            <motion.div className='teamMember' 
              >
                F
            </motion.div>
            <motion.div className='teamMember'   
              >
                G
            </motion.div>
            <motion.div className='teamMember' 
              >
                H
            </motion.div>
            {/* <div  className='teamMember_dummy'>
                
            </div>
            <div  className='teamMember_dummy'>
                
            </div>
            <div  className='teamMember_dummy'>
                
            </div> */}
            </Slider>
        </div>
    </div>
  )
}

export default Team2