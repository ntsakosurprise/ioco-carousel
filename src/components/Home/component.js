import React, {Component} from 'react'

import Carousel from '../Carousel/component'
import SlickCarousel from '../CarouselSlick/component'
import items from  './items'

class Home extends Component{

    render(){

        const settings = {
            autoPlay:true,
            speed: 300,
            slidesToShow: 1

        }

        return(
            
            // <Carousel />
            <SlickCarousel settings={} items={[...items]} shouldShowHead={true} />

        )
    }
}


export default Home