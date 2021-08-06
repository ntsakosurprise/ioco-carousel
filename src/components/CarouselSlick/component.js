import React, {Component} from 'react'
import Slider from 'react-slick'


class CarouselSlick extends Component{

    constructor(){

        super()

        this.state = {

            carouselItems: [
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
                    alt: 'Carousel Get a device image'
                },
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
                
            ],
            isAnimationClass: false,
            nextImageId: 0,
            width: 0,
            height: 0,
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    componentDidMount(){

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
       
    }

    componentWillUnmount(){

        window.removeEventListener('resize', this.updateWindowDimensions);
      
     }
  

  

    render(){

        const {state} = this 
        const {carouselItems,nextImageId=0,width=0} = state 
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

            beforeChange: (current,next)=> this.setState({nextImageId:next}),
            customPaging: (i)=>{
              
                // console.log(i)
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
                {/* <section className="carousel__navigators">
                    <button className="carousel__navigators--p-control" onClick={(e)=>this.showCardInContext('previous',e)}>
                        <span className="carousel__navigators--p-control-text">
                            Previous
                        </span>
                    </button>
                    <button className="carousel__navigators--n-control" onClick={(e)=>this.showCardInContext('next',e)}>
                        <span className="carousel__navigators--n-control-text">
                            Next
                        </span>
                    </button>
                </section> */}

            </div>
        )
    }
}


export default CarouselSlick