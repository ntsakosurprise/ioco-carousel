import React from 'react'


function SlideMan(props){

       const {media,index} = props
   
        return(
            
            <div className="ioco__carousel-item" key={index}>
                <img src={media} alt={alt}  className="ioco__carousel-item--pik"  />
            </div>
        )
    
}


export default SlideMan