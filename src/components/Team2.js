import React from 'react'
import image1 from '../assets/Tran.png'
import { useRef, } from "react";
import { motion, useScroll,useMotionValueEvent,useInView } from "framer-motion";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows : false,
  focusOnSelect: true,
  swipeToSlide: true,
  centerPadding: "150px",
  verticalSwiping: true
};


const Team2 = () => {
  const arrowRef = useRef(null);

  // console.log(arrowRef.current)

  return (
<div className='teamContainer'>
    <div className='Team2'>
        <div className='teamHeading'>Meet the Team</div>
       <div className='SliderContainer'>
        <Slider ref={arrowRef} {...settings}> 
        
              <motion.div  className='teamMember'
                >
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
              <div  className='teamMember_dummy'></div>
              <div  className='teamMember_dummy'></div>
              <div  className='teamMember_dummy'></div>
              <div  className='teamMember_dummy'></div>
              <div  className='teamMember_dummy'></div>
              <div  className='teamMember_dummy'></div>
            
            
            </Slider>
                  <button 
                  onClick={() => arrowRef.current.slickPrev()}
                  className='back'><IoIosArrowBack/></button>
                  <button 
                  onClick={() => arrowRef.current.slickNext()}
                  className='next'><IoIosArrowForward/></button>
           
            {/* </Container> */}
        </div>
    </div>
    </div>
  )
}

export default Team2;