import React, {Component} from 'react'

import Carousel from '../Carousel/component'
import SlickCarousel from '../CarouselSlick/component'
import items from  './items'

class Home extends Component{

    render(){

        return(
            
            // <Carousel />
            <SlickCarousel settings={{autoPlay:true,speed: 300,shouldShowHead:true}} items={[...items]} shouldShowHead={true} />

        )
    }
}


export default Home