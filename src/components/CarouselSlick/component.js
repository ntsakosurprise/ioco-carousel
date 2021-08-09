
import Slider from 'react-slick'
import React, {useState,useEffect} from 'react'



const CarouselSlick = (props)=>{

    const [nextImageId,setNextImageId] = useState(0)
    const [width,setWidth] = useState(0) 
    const [isAnimationClass,setAnimationClass] = useState(false) 

    
    const  carouselItems = [
        {
            media: '/img/carousel_img_1',
            text: 'Mobile Internet',
            alt: 'Carousel Mobile internet image'
        },
        {
            media: '/img/carousel_img_2',
            text: 'Home Internet',
            alt: 'Carousel Home internet image'
        },
        {
            media: '/img/carousel_img_3',
            text: 'Get a device',
            alt: 'Carousel Get a device image'},
        {
            media: '/img/carousel_img_4',
            text: 'Add a phone-line',
            alt: 'Carousel Add a phone-line image'
        },
        {
            media: '/img/carousel_img_5',
            text: 'Upgrade',
            alt: 'Carousel Upgrade image'
        },
        {
            media: '/img/carousel_img_3',
            text: 'Get a device',
            alt: 'Carousel Get a device image'
        },
        
    ]

    const updateWindowDimensions = ()=> {
        setWidth(window.innerWidth);
      }

    useEffect(()=>{

        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);

        return ()=> window.removeEventListener('resize', updateWindowDimensions);

    },[width,nextImageId,isAnimationClass])


    const toShow = width > 900 ? 5 : width <= 540 ? 1 : 3 
    
    const  settings = {

        infinite: true,
        autoPlay: true,
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
        // slidesToScroll: 1
    };
    
    
    return(

        <div className="carousel">
            <h4 className="carousel__title">
                <span className="carousel__title--top-text" >What are you</span>
                <span className="carousel__title--bottom-text">here to do?</span>
            </h4>

            <Slider {...settings}>

                    
                     {carouselItems.map((item,i)=>{

                        // return <div><img src={`${item.media}.jpg`} key={i} alt={item.alt}  /></div>

                        return <div className={`carousel__item carousel__item-num_${i+1}`} key={i}>
                                <figure className="carousel__item--fig">
                                    <img src={`${item.media}.jpg`} alt={item.alt} className="carousel__item--fig-img" />
                                </figure>
                                <div className="carousel__item--content">
                                    <h4 className="carousel__item--content-head">{item.text}</h4>
                                </div>
                                {
                                
                                        i === nextImageId 
                                            ? <section className="carousel__item--action">
                                                    <button className="carousel__item--action-btn">Start Here</button>
                                                </section>
                                            : null
                                }
                            </div>
                        })}

                  

                    
                    {/* this.getCarouselItems() */}
                    
                </Slider>
        </div>
    )


}

export default CarouselSlick;