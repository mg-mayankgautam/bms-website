import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'
import Team2 from '../components/Team2'
import Nav from '../components/Nav';

const Home = () => {

  const [hidden, setHidden] = useState(false)
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1500);
    
  }, [hidden])
  

  const ref = useRef(null);
  const { scrollY } = useScroll(
    // {target: ref, offset: ["end end", "end start"]}
    );
  const [scrollvar, setscrollvar]= useState(0)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
      const height = document.body.clientHeight;
      setscrollvar(latest*100/height)
    //  console.log(scrollvar)
       //   const previous = scrollY.getPrevious();
  })

  return (
    <div>
        <Nav hidden={hidden} setHidden={setHidden} />
        <Welcome hidden={hidden} setHidden={setHidden} scrollvar={scrollvar}/>
        {isDisplayed? <About/>:<></> }
        {isDisplayed? <Events/>:<></> }
        {isDisplayed?  <Team/>:<></> }
        {isDisplayed?  <Team2/>:<></> }
       
    </div>
  )
}

export default Home