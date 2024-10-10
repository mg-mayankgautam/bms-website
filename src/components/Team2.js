import React from 'react'
import Mayank from '../assets/team/Mayank.png'
import Riya from '../assets/team/Riya.png'
import Taran from '../assets/team/Taran.png'
import Tushar from '../assets/team/Tushar.png'
import Prachi from '../assets/team/prachi.png'
import Sanya from '../assets/team/sanya.png'
import Kashvi from '../assets/team/kashvi.png'
import Harshika from '../assets/team/harshika.png'
import TusharChair from '../assets/team/tusharChair.png'
import SanyaChair from '../assets/team/sanyaChair.png'
import Vidyut from '../assets/team/vidyut.png'
import Mansha from '../assets/team/mansha.png'
import Mukul from '../assets/team/mukul.png'
import Ridhi from '../assets/team/ridhi.png'
import Diya from '../assets/team/diya.png'
import Nirbhay from '../assets/team/nirbhay.png'
import { useRef, } from "react";
import { motion, useScroll, useMotionValueEvent, useInView } from "framer-motion";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import groupphoto from '../assets/team/group.JPG'


const Team2 = ({ team_ref }) => {

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    focusOnSelect: true,
    swipeToSlide: true,
    centerPadding: "150px",
    // responsive:[
    //   {
    //     breakpoint: '800px',
    //     settings: {initialSlide: 0,
    //       slidesToShow: 3,
    //       infinite: false
    //     }
    //   }
    // ],
    // responsive :[
    //   {
    //     breakpoint: '600px',
    //     settings: {initialSlide: 0,
    //     slidesToShow: 2,
    //     infinite: false,
    //     centerPadding:"50px",
    //     }
    //   }
    // ],
    responsive: [
      {
        breakpoint: '770px',
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          infinite: false,
          centerPadding: "50px",
        }
      },
      // {
      //   breakpoint: '700px',
      //   settings: {
      //     initialSlide: 0,
      //     slidesToShow: 2,
      //     infinite: false,
      //     centerPadding:"50px",
      //   }
      // },

      // {
      //   breakpoint: '800px',
      //   settings: {
      //     initialSlide: 0,
      //     slidesToShow: 3,
      //     infinite: false,
      //     centerPadding:"100px",

      //   }
      // }
    ],
  };



  const arrowRef = useRef(null);

  // console.log(arrowRef.current)

  return (
    <div className='teamContainer' ref={team_ref}>
      <div className='Team2'>
        <div className='teamHeading'>Meet the Team</div>
        <div className='SliderContainer'>
          <Slider ref={arrowRef} {...settings}>

            <motion.div className='teamMember'
            >
              <img src={SanyaChair} />
            </motion.div>
            <motion.div className='teamMember'
            ><img src={TusharChair} />
            </motion.div>
            <motion.div className='teamMember'
            >
              <img src={Vidyut} />
            </motion.div>
            <motion.div className='teamMember'
            >
              <img src={Mansha} />
            </motion.div>
            <motion.div className='teamMember'
            >
              <img src={Ridhi} />
            </motion.div>
            <motion.div className='teamMember'
            >
              <img src={Mukul} />
            </motion.div>
            <motion.div className='teamMember'
            >
              <img src={Diya} />
            </motion.div>
            <motion.div className='teamMember'
            >
              <img src={Nirbhay} />
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
            className='back'><IoIosArrowBack /></button>
          <button
            onClick={() => arrowRef.current.slickNext()}
            className='next'><IoIosArrowForward /></button>

          {/* </Container> */}
        </div>
      </div>
    </div>
  )
}

export default Team2;