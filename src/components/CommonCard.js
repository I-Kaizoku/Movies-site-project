import React from 'react'
import './CommonCard.css'
const CommonCard = (props) => {
  return (
    <div className='common-card-main-container' onClick={()=>{
      props.getInfo(props.image,props.name);
    }}>
      <img src={props.image}/>
      <label>{props.name}</label>
      <div className='common-card-backshadow'></div>
      <div className='common-card-hover-container'>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    </div>
  )
}

export default CommonCard