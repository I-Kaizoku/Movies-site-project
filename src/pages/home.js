import React, { useEffect, useState ,useRef} from 'react'
import avatar from '../images/avatar.jpg'
import dp from '../images/dp.jpg'
import endgame from '../images/endgame.png'
import infinitywar from '../images/infinitywar.jpg'
import titanic from '../images/titanic.jpg'
import DisplayCard1 from '../components/DisplayCard1'
import nolan from '../images/nolan.jpg'
import sm from '../images/spiderman.jpg'
import sm1 from '../images/spiderman1.png'
import smt from '../images/smtitle.png'
import bb from '../images/bossbaby.jpg'
import bb1 from '../images/bb.png'
import cars from '../images/cars.jpg'
import cars1 from '../images/cars1.png'
import es from '../images/es.jpg'
import ck from '../images/ck.png'
import CatagoryCard from '../components/CatagoryCard';
import ContinueWatching from '../components/ContinueWatching'
import './home.css'
import AllMovieContainer from '../components/AllMovieContainer'
import Newcard from '../components/Newcard'
import NewCard1 from '../components/NewCard1'
import Footer from '../components/Footer'
const Home = () => {
    const [leftWidth,setLeftWidth]=useState("")
    const [isMinimized,setIsMinimized]=useState(Boolean)
    const [rotate,setRotate]=useState("")
    const [movieList,setMovieList]=useState([])
    const [index,setIndex]=useState()
    const [conwatTranslate,setConwatTranslate]=useState("")
    const [count,setCount]=useState()
    const [loadmoremovieList,setloadmoremovieList]=useState([])
    const [jc,setJC]=useState("")


    const trending=document.getElementById("trending");
    const top_airing=document.getElementById("top-airing");
    const continueWatching=document.getElementById("continue-watching");
    const home=document.getElementById("home");
    const catagory=document.getElementById("catagory")
    const moveToHome=()=>{
        home.scrollIntoView({behavior:"auto"})
    }
    const moveToTrending=()=>{
        trending.scrollIntoView({behavior:"auto"})
        
    }
    const moveToTopAiring=()=>{
        top_airing.scrollIntoView({behavior:"auto"});
        
    }
    const moveToContinueWatching=()=>{
        continueWatching.scrollIntoView({behavior:"auto"});
    }
    const moveToCatogory=()=>{
        catagory.scrollIntoView({behavior:"auto"})
    }
  const loadMoreMovies=()=>{
    for(let i=0;i<list.length;i++){
        setloadmoremovieList(prev=>[...prev,list[i]]);
    }
  }
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
            top:"9"
        },
        {
            image:endgame,
            name:"Avengers : End Game",
            top:"10"
        },
        {
            image:infinitywar,
            name:"Avengers : Infinity War",
            top:"11"
        },
        {
            image:titanic,
            name:"Titanic",
            top:"12"
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
        },
        {
            image:cars,
            name:"Cars",
            top:"6"
        }
        
    ]
    useEffect(()=>{
        loadMoreMovies();
        setConwatTranslate("translateX(0px)")
        setIndex(4)
        setCount(0)
        setLeftWidth("70px")
        setIsMinimized(true)
        setRotate("rotateY(180deg)")
        setMovieList([])
        for(let i=0;i<10;i++){
            // l.push(list[i])
            setMovieList(prev=>[...prev,list[i]])
        }
        // setMovieList(l)
        console.log(movieList)
    },[])

    //windowwidthchange
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindowWidth(window.innerWidth)
        })
        if( windowWidth<800){
            (isMinimized)?(setLeftWidth("140px")):setLeftWidth("0px")
            // alert("hi")
            
        }
        return()=>{
            window.removeEventListener('resize',()=>{
                setWindowWidth(window.innerWidth)
            })
        }
    },windowWidth)
    const [leftX,setLeftX]=useState((windowWidth<=800)?"translateX(-100%)":"translateX(0%)");
    useEffect(()=>{
        (windowWidth<=800)?setLeftX("translateX(-100%)"):setLeftX("translateX(0%)")
    },[])
    
    
    //header responsive code
    const [topOptionsvis,setTopOptionsVis]=useState("hidden")
    const [topOptionspos,setTopOptionspos]=useState("absolute")
    const [topbarclicked,setTopBarClicked]=useState(Boolean)
    useEffect(()=>{
        setTopBarClicked("false")
    },[])

    //header search responsive
    const [svis,setSvis]=useState("")
    const [searchClicked,setSearchClicked]=useState(Boolean)
    useEffect(()=>{
        setSvis("hidden");
        setSearchClicked("false")
    },[])


  return (
    <div className='home-page-main-container'>
        <div className='menu-arrow' style={{transform:rotate}} onClick={()=>{
            (isMinimized)?(setLeftWidth("140px")):setLeftWidth("70px");
            (isMinimized)?(setJC("start")):setJC("center");
            (isMinimized)?setRotate("rotateY(0deg)"):setRotate("rotateY(180deg)");
            (windowWidth<=800 && isMinimized)?setLeftX("translateX(0%)"):setLeftX("translateX(-100%)");
            if(windowWidth>800){
                setLeftX("0px")
            }
            setIsMinimized(!isMinimized)
        }}>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
      <div className='left' style={{minWidth:leftWidth,transform:leftX}}>
        <div className='logo'></div>
        
        <div className='menu'>
            <label className='menuhead'>Menu</label>
            <div style={{justifyContent:jc}}>
                <i class="fa-brands fa-edge" style={{color:'rgb(201, 60, 0)'}}></i>
                {(!isMinimized)? <label style={{color:'white'}}>browse</label> : null}
            </div>
            <div style={{justifyContent:jc}}>
                <i class="fa-regular fa-heart"></i>
                {(!isMinimized)? <label>wishlist</label> : null }
            </div>
            <div style={{justifyContent:jc}}>
                <i class="fa-regular fa-calendar-days"></i>
                {(!isMinimized)? <label>coming soon</label> : null }
            </div>
        </div>

        <div className='divider'></div>

        <div className='following'>
            <label>following</label>

            <div style={{justifyContent:jc}}>
                <div className='followingdp'>
                    <img src={nolan}></img>
                </div>
                {(!isMinimized)? <label>Nolan</label> : null }
                <div className='dot' style={
                    {
                        position:(isMinimized)?"absolute":"relative",
                        left:(isMinimized)?"10px":"0px",
                        top:(isMinimized)?"5px":"0px"
                }}></div>
            </div>
            <div style={{justifyContent:jc}}>
                <div className='followingdp'>
                    <img src={nolan}></img>
                </div>
                {(!isMinimized)? <label>Nolan</label> : null }
                <div className='dot' style={
                    {
                        position:(isMinimized)?"absolute":"relative",
                        left:(isMinimized)?"10px":"0px",
                        top:(isMinimized)?"5px":"0px"
                }}></div>
            </div>
            <div style={{justifyContent:jc}}>
                <div className='followingdp'>
                    <img src={nolan}></img>
                </div>
                {(!isMinimized)? <label>Nolan</label> : null }
                <div className='dot' style={
                    {
                        position:(isMinimized)?"absolute":"relative",
                        left:(isMinimized)?"10px":"0px",
                        top:(isMinimized)?"5px":"0px"
                }}></div>
            </div>
            
        </div>
        <div className='addmore-following'>
            <div className='following-arrow'>
                <i class="fa-solid fa-angle-down"></i>
            </div>
                {(!isMinimized)? <label>load more</label> : null }
        </div>

        <div className='divider'></div>

        <div className='sign-out' style={{justifyContent:jc}}>
            <i class="fa-solid fa-right-from-bracket"></i>
                {(!isMinimized)? <label>Sign out</label> : null }
        </div>
      </div>

      <div className='vertical-divider'></div>

      <div className='right' style={{paddingLeft:(windowWidth>800)?"100px":"0px",width:(windowWidth>800)?(windowWidth-101)+"px":"100vw"}}>


            <div className='header' style={{justifyContent:(windowWidth>800)?"start":"center",width:"100%",paddingBlock:"10px",gap:"20px"}}>
                <div className='header-left' style={{zIndex:"10000",visibility:(svis==="visible")?"hidden":"visible",marginLeft:(svis==="visible")?"1000px":"0px",}} onClick={()=>{
                    if(windowWidth<=800){
                        setSvis("visible")
                    }
                }} >
                    <div className='search' style={{width:(windowWidth<=800)?"40px":"300px",justifyContent:(windowWidth<=800)?"center":"space-between",paddingInline:(windowWidth<=800)?"0px":"5px"}}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input style={{visibility:(windowWidth<=800)?"hidden":"visible",position:(windowWidth<=800)?"absolute":"relative"}} type='text' placeholder='search everything'/>
                        <i style={{visibility:(windowWidth<=800)?"hidden":"visible",position:(windowWidth<=800)?"absolute":"relative"}} class="fa-solid fa-filter"></i>
                    </div>
                </div>
                <div className='header-left header-search-container-mobile' style={{visibility:svis,zIndex:"500",position:"fixed",left:"0px",top:"0px",background:"rgb(19, 19, 19)"}}>
                    <div onClick={()=>{
                        setSvis("hidden")
                    }}>
                        <i style={{scale:"2",marginTop:"20px"}} class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <div className='search' style={{height:"50px",transform:"translateX(-10px)",justifyContent:"space-around",marginTop:"0px"}}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='search everything' style={{fontSize:"18px"}}/>
                        <i class="fa-solid fa-filter"></i>
                    </div>
                    <div className='recent-history-container'>
                        <div>
                            <i class="fa-solid fa-rotate-right"></i>
                            <label>Avater</label>
                        </div>
                        <div>
                            <i class="fa-solid fa-rotate-right"></i>
                            <label>Spider Man</label>
                        </div>
                    </div>
                </div>
                
                
                    
                <div className='header-top-center-menu-bar' onClick={()=>{
                    if(!topbarclicked){
                        setTopOptionsVis("hidden")
                        setTopOptionspos("absolute")
                    }
                    else{
                        setTopOptionsVis("visible")
                        setTopOptionspos("relative")
                    }
                    setTopBarClicked(!topbarclicked);
                    
                }}>
                    <div className='header-center' style={{maxWidth:"fit-content",visibility:(windowWidth<=1150)?"visible":"hidden",position:(windowWidth<=1150)?"relative":"absolute"}}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className='header-center' style={{visibility:topOptionsvis,position:topOptionspos,marginTop:"10px",flexDirection:"column",maxWidth:"80vw",zIndex:"250"}}>
                        <label onClick={moveToHome}> Home</label>
                        <div className='header-center-vertical-line-divider' style={{width:"85%",height:"3px"}}></div>
                        <label onClick={moveToContinueWatching}> Continue Watching</label>
                        <div className='header-center-vertical-line-divider' style={{width:"85%",height:"3px"}}></div>
                        <label onClick={moveToTopAiring}>Top Airing</label>
                        <div className='header-center-vertical-line-divider' style={{width:"85%",height:"3px"}}></div>
                        <label onClick={moveToTrending}>Trending</label>
                        <div className='header-center-vertical-line-divider' style={{width:"85%",height:"3px"}}></div>
                        <label onClick={moveToCatogory}>catagory</label>
                    </div>
                </div>
                
                <div className='header-center' style={{visibility:(windowWidth>1150)?"visible":"hidden",position:(windowWidth>800)?"relative":"absolute"}}>
                    <label onClick={moveToHome}> Home</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToContinueWatching}> Continue Watching</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToTopAiring}>Top Airing</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToTrending}>Trending</label>
                    <div className='header-center-vertical-line-divider'></div>
                    <label onClick={moveToCatogory}>catagory</label>
                </div>
                {/* <div className='header-right'>
                    <i class="fa-regular fa-envelope"></i>
                    <i class="fa-regular fa-bell"></i>
                    <div className='userdp'>
                        <img src={dp}></img>
                    </div>
                </div> */}
            </div>
            <div className='items-container'>
            <div  id='home'></div>
                <div className='main-center-body'>
                    <div className='allmoviecontainer-container' style={{position:"relative"}}>
                        <div id='continue-watching' style={{position:"absolute",left:"50%",top:"80%"}}></div>
                        <AllMovieContainer/>
                    </div>

                    <div className='catogories' style={{maxWidth:"100%",display:"flex",alignItems:"center",justifyContent:"start",paddingLeft:"20px"}}>
                        <label>Continue Watching</label>
                        <div className='pill'></div>
                    </div>
                    <div className='continue-watching-in-home-with-controllers' style={
                        {
                            minWidth:(windowWidth<=800)?"96vw":null,
                            paddingInline:(windowWidth<=800)?"2vw":null
                        }
                        }>
                        <div className='arrow-back' onClick={()=>{
                            setCount(count+(100/8)+0.1)
                            setConwatTranslate("translateX("+count+"%)")
                            
                        }}>                           
                            <i class="fa-solid fa-arrow-left"></i>
                        </div> 
                        <div className='continue-watching-container-in-home' style={{minWidth:(windowWidth<=800)?(windowWidth-300)+"px":null}}>  
                            <div id="top-airing"></div>
                            <div className='continue-watching-slider' style={{transform:conwatTranslate}}>
                                <ContinueWatching windowWidth={windowWidth} name="Avengers:Infinity War" image={infinitywar} progress="70%"/>
                                <ContinueWatching windowWidth={windowWidth} name="Avatar" image={avatar} progress="30%"/>
                                <ContinueWatching windowWidth={windowWidth} name="Avengers:End Game" image={endgame} progress="50%"/>
                                <ContinueWatching windowWidth={windowWidth} name="Amazing Spider Man" image={sm} progress="20%"/>
                                <ContinueWatching windowWidth={windowWidth} name="Boss Baby 2" image={bb} progress="90%"/>
                                <ContinueWatching windowWidth={windowWidth} name="The Eminence in Shadow" image={es} progress="40%"/>
                                <ContinueWatching windowWidth={windowWidth} name="Cars" image={cars} progress="95%"/>
                                <ContinueWatching windowWidth={windowWidth} name="Titanic" image={titanic} progress="34%"/>
                            </div>
                        </div>
                        <div className='arrow-back' onClick={()=>{
                            setCount(count-(100/8)-0.1)
                            setConwatTranslate("translateX("+count+"%)")
                        }}>                           
                            <i class="fa-solid fa-arrow-right"></i>
                        </div> 

                    </div>
                    <div className='header-1' style={{justifyContent:"start",transform:"translateY(-50%)"}}>
                        <div className='catogories' style={{maxWidth:"100%",display:"flex",alignItems:"center",justifyContent:"start",paddingLeft:"20px"}}>
                            <label>Top Airing</label>
                            <div className='pill'></div>
                        </div>
                    </div>
                    <div className='slider' style={{overflow:"scroll",maxWidth:(windowWidth-80)+"px",paddingBlock:"20px",paddingInline:"20px"}}>
                        {
                            movieList.map((movie,i)=>{
                                return <DisplayCard1 image={movie.image} movie_name={movie.name} top={movie.top}/>
                            })
                        }
                    <div  id="trending"></div>
                    </div>
                    
                    
                    <div className='header-1'>
                        <div className='catogories' style={{maxWidth:"100%",display:"flex",alignItems:"center",justifyContent:"start",paddingLeft:"20px"}} >
                            <label>Trending</label>
                            <div className='pill'></div>
                        </div>
                        {/* <div className='top-alide-options'>
                            <div onClick={()=>{
                                if(index>0){
                                    setMovieList([])
                                    for(let i=index-4;i<index;i++){
                                        setMovieList(prev=>[...prev,list[i]])
                                    }
                                    setIndex(index-4)
                                }
                            }}>
                            <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <div onClick={()=>{

                                if(index<list.length)
                                {    
                                    setMovieList([])
                                    for(let i=index;i<index+4;i++){
                                        setMovieList(prev=>[...prev,list[i]])
                                    }
                                    setIndex(index+4)}
                            }}>
                            <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div> */}
                    </div>
                    <div className='home-trending-card-container'>
                        {
                            loadmoremovieList.map(data=>{
                                return <Newcard image={data.image} name={data.name}/>
                            })
                        }
                        <div className='home-load-more-container'>
                        <div className='home-load-more-container-circle'></div>
                        <div className='addmore-following' onClick={loadMoreMovies}>
                            <div className='following-arrow'>
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                                <label>load more</label>
                        </div>
                    </div>
                    <div id='catagory'></div>
                    </div>
                    
                   
                    <div className='header-1' style={{justifyContent:"start"}}>
                        <div className='catogories' style={{maxWidth:"100%",display:"flex",alignItems:"center",justifyContent:"start",paddingLeft:"20px"}}>
                            <label>catagory</label>
                            <div className='pill'></div>
                        </div>
                    </div>

                    <div style={{width:(windowWidth>800)?(windowWidth-130)+"px":"100vw",alignItems:"center",justifyContent:"start",padding:"10px",overflow:"scroll"}}>
                        <div className='catagory-container'>
                            <NewCard1 windowWidth={windowWidth} image={es} name="The Eminance in Shadow" genre="Anime Fantasy"/>
                            <NewCard1 windowWidth={windowWidth} image={avatar} name="Avatar" genre="Scifi Fantacy"/>
                            <NewCard1 windowWidth={windowWidth} image={infinitywar} name="Avengers : Infinity War" genre="Aciton SuperHero"/>
                            <NewCard1 windowWidth={windowWidth} image={sm} name="Amazing Spider Man" genre="Action SuperHero"/>
                            <NewCard1 windowWidth={windowWidth} image={cars} name="Cars" genre="Sports Animated"/>
                        </div>
                    </div>
                    <div className='horizontal-line-divider'></div>
                    <div className='home-main-footer'>
                        <Footer/>
                    </div>
                    
                    
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home
