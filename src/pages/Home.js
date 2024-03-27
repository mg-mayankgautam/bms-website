import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'
import Team2 from '../components/Team2'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Faculty from '../components/Faculty';

const Home = () => {

  const [hide, setHide] = useState(false)
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if(hide){
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1500);
  }
    
  }, [hide])
  

  const ref = useRef(null);
  const { scrollY } = useScroll(
    // {target: ref, offset: ["end end", "end start"]}
    );
  const [scrollvar, setscrollvar]= useState(0)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
      // console.log(latest);
      const height = document.body.clientHeight;
      setscrollvar(latest*100/height)
    //  console.log(scrollvar)
       //   const previous = scrollY.getPrevious();
  })

  return (
    <div>
        <Nav hide={hide} setHide={setHide} />
        <Welcome hide={hide} setHide={setHide} scrollvar={scrollvar}/>
        {isDisplayed? <About/>:<></> }
        {isDisplayed? <Events scrollvar={scrollvar}/>:<></> }
        {isDisplayed?  <Faculty/>:<></> }
        {isDisplayed?  <Team2/>:<></> }
        {isDisplayed?  <Footer/>:<></> }
    </div>
  )
}

export default Home