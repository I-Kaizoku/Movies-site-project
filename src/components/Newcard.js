import React from 'react'
import './Newcard.css'
import es from '../images/es.jpg'
const Newcard = (props) => {
  return (
    <div className='new-card-main-container'>
      <div className='new-card-image-container'>
        <img src={props.image} alt='no image'/>
      </div>
      <div className='new-card-bottom'>
        <label className='new-card-bottom-movie-name'>{props.name}</label>
        <div className='new-card-bottom-info'>
            <div className='new-card-bottom-info-left'>
                <label>2023</label>
                <div className='dot' style={{background:"rgba(94, 94, 94, 0.347)"}}></div>
                <label>127m</label>
            </div>
            <label className='new-card-bottom-info-right'>Movie</label>
        </div>
      </div>
    </div>
  )
}

export default Newcard
