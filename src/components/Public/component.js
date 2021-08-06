import React from 'react'
import {Route} from 'react-router-dom'

import Header from '../Header/component'

export default ({component: Component,...rest})=>{

    return(

           <>
                <Header />
                <Route {...rest} render={(props)=>{

                    return <Component {...props} />

                }} />
           </>
        
      

    )

}

    


