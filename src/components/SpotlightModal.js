import React, { useRef } from 'react'
import bloom from '../assets/bloom.png'
import { Link } from 'react-router-dom';

const SpotlightModal = ({onClose}) => {

    const modalRef = useRef();

    const closeModal=(e)=>{
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='SpotlightModal'>
        <div className='modalBloomDiv'>
            <button onClick={onClose} className='modalCloseBtn'>X</button>
            <div className='modalBloom'>
                <Link to='https://bit.ly/4ac25AV'>
                    <img src={bloom} className='bloomPoster' style={{cursor:`${<div>click to register</div>}`}}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SpotlightModal