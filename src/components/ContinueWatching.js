import React from 'react'
import './ContinueWatching.css'
const ContinueWatching = (props) => {
  return (
    <div className='conwat-main-container' style={{width:(props.windowWidth<=800)?"75vw":"330px"}}>
      <img src={props.image}/>
      <div className='name-and-progess-bar'>
        <label className='conwat-movie-name'>{props.name}</label>
        <div className='conwat-com-bar'>
            <div style={{width:props.progress}} className='conwat-progress-bar'></div>
        </div>
      </div>
      <div className='play-button'></div>
        <i id='play-i' class="fa-solid fa-play"></i>
    </div>
  )
}

export default ContinueWatching
