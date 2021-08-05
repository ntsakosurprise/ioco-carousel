import React, {Component} from 'react'
import Slider from 'react-slick'


class CarouselSlick extends Component{

    constructor(){

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
        const {carouselItems,width,nextImageId} = state 

        return(
            <div className="carousel">

                <Slider>

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