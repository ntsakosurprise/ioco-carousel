import React, {Component} from 'react'

import SlickCarousel from '../CarouselSlick/component'
import items from  './items'
import SlideMan from './slideman'

class Store extends Component{

    render(){

        const settings = {
            autoplay:true,
            speed: 300,
            slidesToShow: 1,
            autoplaySpeed: 1500,
            dots: true

        }

        return(
            
            // <Carousel />
            <SlickCarousel settings={settings} items={[...items]} slidePapper={SlideMan} />

        )
    }
}


export default (Store)