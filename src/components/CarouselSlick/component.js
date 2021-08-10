
import Slider from 'react-slick'
import React, {useState,useEffect} from 'react'
import Basic from './basic' 
import items from './items'




export default (props)=>{

    const [nextImageId,setNextImageId] = useState(0)
    const [width,setWidth] = useState(0) 
    const [isAnimationClass,setAnimationClass] = useState(false) 

    const updateWindowDimensions = ()=> {
        setWidth(window.innerWidth);
      }

    useEffect(()=>{

        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);

        return ()=> window.removeEventListener('resize', updateWindowDimensions);

    },[width,nextImageId,isAnimationClass])

    const {settings={},shouldShowHead=false,items=[],slidePapper=null} = props 
    const {slidesToShow=1} = settings
    const toShow = slidesToShow === 1 ? slidesToShow : width > 900 ? 5 : width <= 540 ? 1 : 3 
    const SlidePapper =  slidePapper ? slidePapper : null

    console.log('THE ITEMS')
    
    const  caraSettings = {

        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow:  toShow,
        centerMode: true, 
        centerPadding: 0,
        dots: true,
        className: 'slider-height',
        dotsClass: "slick-dots slick-thumb",

        beforeChange: (current,next)=> setNextImageId(next),
        customPaging: (i)=>{
            
            console.log(i)
            return(<div className="dot"></div>)
            },
        ...settings,
        slidesToScroll: 1
    };
    
    console.log(caraSettings)
    
    return(

        <div className="carousel">
            {shouldShowHead 
                ?<h4 className="carousel__title">
                    <span className="carousel__title--top-text" >What are you</span>
                    <span className="carousel__title--bottom-text">here to do?</span>
                </h4>
                :null
            }

            <Slider {...caraSettings}>

                    
                     {items.map((item,i)=>{

                         console.log('THE ITEM')
                         console.log(item)

                        // return <div><img src={`${item.media}.jpg`} key={i} alt={item.alt}  /></div>

                        return  slidePapper ? <SlidePapper {...item} index={i} /> :<Basic {...item} index={i} />

                        })
                        }

                  

                    
                    {/* this.getCarouselItems() */}
                    
                </Slider>
        </div>
    )


}