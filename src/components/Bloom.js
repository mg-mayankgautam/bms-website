import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.png'
const Bloom = () => {
  return (
    <div style={{height:'200vh'}} >
        <Nav/>
        <div className='Banner_bloom' >
            <div ><img style={{height:'5rem'}} src={logo}/></div>
            <div style={{alignSelf:'center', fontSize:'8rem'}}>bloom</div>
            <div style={{alignSelf:'end', fontSize:'8rem'}}>a mental health fest</div>
        </div>
      
    </div>
  )
}

export default Bloom
