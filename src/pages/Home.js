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
import Wall from '../components/Wall';
import Support from '../components/Support';

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
  
  const events_ref = useRef(null);

  const ref = useRef(null);
  const { scrollY } = useScroll(
    // {target: ref, offset: ["end end", "end start"]}
    );
  const [scrollvar, setscrollvar]= useState(0)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
      // console.log(latest);
      const height = document.body.clientHeight;
      setscrollvar(latest*100/height)
     console.log(scrollvar)
       //   const previous = scrollY.getPrevious();
  })

  return (
    <div>
        <Nav events_ref={events_ref} hide={hide} setHide={setHide} />
        <Welcome hide={hide} setHide={setHide} scrollvar={scrollvar}/>
        {isDisplayed? <About/>:<></> }
        {isDisplayed? <Events events_ref={events_ref}  scrollvar={scrollvar}/>:<></> }
        {isDisplayed?  <Faculty/>:<></> }
        {isDisplayed?  <Team2/>:<></> }
        {isDisplayed?  <Wall scrollvar={scrollvar}/>:<></> }
        {isDisplayed?  <Support/>:<></> }
        {isDisplayed?  <Footer/>:<></> }
    </div>
  )
}

export default Home