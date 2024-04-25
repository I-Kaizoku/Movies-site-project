import React from 'react'
import './NewCard1.css'
import es from '../images/es.jpg'
import img from '../images/cars.jpg'
import img1 from '../images/bossbaby.jpg'
import img2 from '../images/spiderman.jpg'
const NewCard1 = (props) => {
  return (
    <div className='new-card-1-main-container' style={{width:(props.windowWidth<800)?"25%":"20%",minWidth:(props.windowWidth<800)?"80vw":null}}>
      <div className='new-card-1-image-container'>
        <img src={props.image} style={{}} alt='no image'/>
      </div>
      <div className='new-card-1-main-bottom-container'>
        <div className='new-card-1-main-bottom-genre-holder'>
            <label style={{width:"100%",overflow:"hidden",textOverflow:"ellipsis",marginLeft:"10px"}}>{props.name}</label>
        </div>
        <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:"5px"}}>
            <label style={{fontSize:"12px",fontWeight:"300",color:"white",marginLeft:"10px"}}>{props.genre}</label>
            <div className='new-card-1-main-bottom-rat-option-container'>
                <div className='new-card-1-main-bottom-raters'>
                    <div style={{backgroundColor:"red"}}>
                        <img src={img}/>
                    </div>
                    <div style={{backgroundColor:"blue",transform:"translateX(-50%)"}}>
                        <img src={img1}/>
                    </div>
                    <div style={{backgroundColor:"green",transform:"translateX(-100%)"}}>
                        <img src={img2}/>
                    </div>
                    <label style={{fontSize:"13px",transform:"translateX(-30%)",color:"white",fontWeight:"300",overflow:"hidden",textOverflow:"ellipsis"}}>210+ movies</label>
                </div>
                <button className='new-card-1-explore-btn'>explore</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard1
