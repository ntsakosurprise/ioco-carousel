
import React from 'react'
import PropTypes from 'prop-types'




const Basic = (props)=>{

    const {nextImageId,media,alt,index} = props
    
    
    return(

   

                    
                     <div className={`carousel__item carousel__item-num_${index+1}`} key={index}>
                            <figure className="carousel__item--fig">
                                <img src={`${media}.jpg`} alt={alt} className="carousel__item--fig-img" />
                            </figure>
                            <div className="carousel__item--content">
                                <h4 className="carousel__item--content-head">{item.text}</h4>
                            </div>
                            {
                            
                                    index === nextImageId 
                                        ? <section className="carousel__item--action">
                                                <button className="carousel__item--action-btn">Start Here</button>
                                            </section>
                                        : null
                            }
                    </div>
                    

                  

           
                    
            
    )


}

export default Basic;


Component.PropTypes = {

    nextImageId: PropTypes.number.isRequired,
    media: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}                                  
