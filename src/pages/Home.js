import React from 'react'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'

const Home = () => {
  return (
    <div>
        <Welcome/>
        <About/>
        <Events/>
        <Team/>
    </div>
  )
}

export default Home