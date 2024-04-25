import React from 'react'
import './CatagoryCard.css'
const CatagoryCard = (props) => {
  return (
        <div className='main-outer-hover-container'>
            <div className='Catagorycard-main-container'>
            <div className='cat-top'>
                <img src={props.image}/>
            </div>
            
            <div className='cat-bottom'>
                <label>{props.movie_name}</label>
                <div className='catagory'>
                    {
                        props.catagory.map(cat=>{
                            return <label className='cat-option'>{cat}</label>
                        })
                    }
                </div>
            </div>
            </div>
            <div className='hover-effect'>
                <img src={props.over_image}/>
            </div>
            <div className='over-txt'>
                <label>{props.catagory[0]} and more</label>
            </div>
        </div>
  )
}

export default CatagoryCard
