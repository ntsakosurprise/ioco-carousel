import React, {Component} from 'react'
import Slider from 'react-slick'


class CarouselSlick extends Component{

    constructor(props){

        super(props)

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
                }
            ],
            nextImageId: 0,
            width: 0
        }
    }



    render(){

        const {state} = this 
        const {carouselItems,nextImageId=0,width=0} = state 
        const toShow = width > 900 ? 5 : width <= 540 ? 1 : 3

        const settings = {

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
            customPaging: ()=>{
                
                return(<div className="dot"></div>)
            },
           
        }

        return(
            <div className="carousel">

                <h4 className="carousel__title">
                    <span className="carousel__title--top-text" >What are you</span>
                    <span className="carousel__title--bottom-text">here to do?</span>
                </h4>

                <Slider {...settings}>



                    {carouselItems.map((item,i)=>{

                        return <section className={`carousel__item carousel__item-num_${i+1}`} key={i}>
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
                            </section>
                        })
                    
                        }
                    </Slider>
                
            </div>
        )
    }
}


export default CarouselSlick