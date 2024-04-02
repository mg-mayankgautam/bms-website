import React from 'react'
import Mayank from '../assets/team/Mayank.png'
import Riya from '../assets/team/Riya.png'
import Taran from '../assets/team/Taran.png'
import Tushar from '../assets/team/Tushar.png'
import Prachi from '../assets/team/prachi.png'
import Sanya from '../assets/team/sanya.png'
import Kashvi from '../assets/team/kashvi.png'
import Harshika from '../assets/team/harshika.png'
import { useRef, } from "react";
import { motion, useScroll,useMotionValueEvent,useInView } from "framer-motion";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import groupphoto from '../assets/team/group.JPG'


var settings1 = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows : false,
  focusOnSelect: true,
  swipeToSlide: true,
  centerPadding: "150px",
  responsive: [
    {
      breakpoint: 480,
      settings: {initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  responsive :[
    {
      breakpoint: 600,
      settings: {initialSlide: 0,
        slidesToShow: 2,
      }
    }
  ],
  responsive:[
    {
      breakpoint: 800,
      settings: {initialSlide: 0,
        slidesToShow: 3,
      }
    }
  ]
};


const Team2 = ({team_ref}) => {
  const arrowRef = useRef(null);

  // console.log(arrowRef.current)

  return (
  <div className='teamContainer' ref={team_ref}>
    <div className='Team2'>
          <div className='teamHeading'>Meet the Team</div>
        <div className='SliderContainer'>
          <Slider ref={arrowRef} {...settings1}> 
          
                <motion.div  className='teamMember'
                  >
                    <img src={Riya}/>
                </motion.div>
                <motion.div className='teamMember'
                  ><img src={Taran}/>
                </motion.div>
                <motion.div className='teamMember'
                >
                  <img src={Mayank}/>
                </motion.div>
                <motion.div className='teamMember'
                  >
                  <img src={Prachi}/>
                </motion.div>
                <motion.div className='teamMember' 
                >
                  <img src={Tushar}/>
                </motion.div>
                <motion.div className='teamMember' 
                  >
                  <img src={Sanya}/>
                </motion.div>
                <motion.div className='teamMember'   
                  >
                  <img src={Kashvi}/>
                </motion.div>
                <motion.div className='teamMember' 
                  >
                  <img src={Harshika}/>
                </motion.div>
                {/* <div  className='teamMember full'>
                  <img src={groupphoto}/>
                </div> */}
                {/* <div  className='teamMember_dummy'></div>
                <div  className='teamMember_dummy'></div>
                <div  className='teamMember_dummy'></div>
                <div  className='teamMember_dummy'></div>
                <div  className='teamMember_dummy'></div> */}
                {/* <div  className='teamMember_dummy'></div> */}
              
              
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