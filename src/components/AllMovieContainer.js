import React, { useEffect, useState } from 'react'
import './AllMovieContainer.css'
import avatar from '../images/avatar.jpg'
import endgame from '../images/endgame.png'
import infinitywar from '../images/infinitywar.jpg'
import titanic from '../images/titanic.jpg'
import sm from '../images/spiderman.jpg'
import bb from '../images/bossbaby.jpg'
import cars from '../images/cars.jpg'
import es from '../images/es.jpg'
import CommonCard from './CommonCard'
const AllMovieContainer = () => {
    var [bgimage,setImage]=useState("")
    var [bgname,setName]=useState("")

    const list=[
        {
            image:avatar,
            name:"Avatar",
            top:"1"
        },
        {
            image:endgame,
            name:"Avenger : End Game",
            top:"2"
        },
        {
            image:infinitywar,
            name:"Avenger : Infinity War",
            top:"3"
        },
        {
            image:titanic,
            name:"Titanic",
            top:"4"
        },
        {
            image:es,
            name:"The Eminence in Shadow",
            top:"5"
        },
        {
            image:cars,
            name:"Cars",
            top:"6"
        },
        {
            image:bb,
            name:"Boss Baby",
            top:"7"
        },
        {
            image:sm,
            name:"Amazing Spider Man",
            top:"8"
        },
        {
            image:avatar,
            name:"Avatar",
            top:"1"
        },
        {
            image:endgame,
            name:"Avenger : End Game",
            top:"2"
        },
        {
            image:infinitywar,
            name:"Avenger : Infinity War",
            top:"3"
        },
        {
            image:titanic,
            name:"Titanic",
            top:"4"
        },
        {
            image:es,
            name:"The Eminence in Shadow",
            top:"5"
        }
    ]

    useEffect(()=>{
        setImage(es)
        setName("Eminence in Shadow")
    },[])

    
    const getInfo=(image,name)=>{
        setImage(image)
        setName(name)
    }

  return (
    <div className='amc-main-container'>
        <div className='amc-large-view'>
            <img src={bgimage}/>
            <div className='amc-large-view-left-part'>
                <label className='amc-large-view-left-part-movie-name'>{bgname}</label>
                <div>
                    <label className='amc-large-view-left-part-label-match'>95% match</label>
                    <label className='amc-large-view-left-part-label-year'>2022</label>
                    <label className='amc-large-view-left-part-label-season-or-movie'>2 seasons</label>
                    <div className='amc-large-view-left-part-label-quality'>
                        <label> 4K ULTRA HD</label>
                    </div>
                    <div className='amc-large-view-left-part-label-quality'>
                        <label> 5.1</label>
                    </div>
                </div>
                <div className='amc-large-view-left-part-movie-description'>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </label>
                </div>
                <div className='movie-options'>
                    <button className='movie-options-play-now-btn'>Play Now</button>
                    <div className='movie-options-wish-list'>
                        <label>add to Wishlist</label>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>


        <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            {/* <div className='header-1' style={{justifyContent:"start"}}>
                <div className='catogories'>
                    <label>Top Airing</label>
                    <div className='pill'></div>
                </div>
            </div> */}
            <div className='amc-movie-scroll-strip-container'>
                <div className='amc-movie-scroll-strip'>
                    {
                        list.map(obj=>{
                            return <CommonCard image={obj.image} name={obj.name} getInfo={getInfo}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllMovieContainer



